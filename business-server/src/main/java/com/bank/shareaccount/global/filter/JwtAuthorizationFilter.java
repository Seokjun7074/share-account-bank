package com.bank.shareaccount.global.filter;

import com.auth0.jwt.JWT;
import com.bank.shareaccount.global.jwt.JwtService;
import com.bank.shareaccount.user.entity.User;
import com.bank.shareaccount.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Transactional
@RequiredArgsConstructor
@Slf4j
public class JwtAuthorizationFilter extends OncePerRequestFilter {

    private final JwtService jwtService;

    private final UserRepository userRepository;

    private final String[] permitUrls ;


    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain) throws IOException, ServletException {
        for (var permitUrl : permitUrls) {
            if (request.getRequestURI().equals(permitUrl)) {
                chain.doFilter(request, response);
                return;
            }
        }

        log.info("JWT filter 진입");
        String refreshToken = jwtService.extractRefreshToken(request)
                .filter(jwtService::isTokenValid)
                .orElse(null);

        // 1. refresh != null  ->  accessToken 만료로 인한 재발급 요청
        if (refreshToken != null) {
            log.info("리프레시 토큰 확인, 토큰 재발급 요청");
            try {
                jwtService.checkRefreshToken(response,refreshToken,extractId(jwtService.extractAccessToken(request).get()));
            } catch (Exception e) {
                throw new RuntimeException(e);
            }
            return;
        }


        // 2. accessToken 확인
        String accessToken = jwtService.extractAccessToken(request)
                .filter(jwtService::isTokenValid)
                .orElse(null);

        if (accessToken == null) {
            log.info("엑세스 토큰 확인 불가, 인증 실패");
            return;
        }

        String id = extractId(accessToken);

        log.info("엑세스 토큰에서 id 추출, ID : {}", id);
        User user = userRepository.findById(id).orElseThrow(IllegalArgumentException::new);

        UserDetails userDetails = org.springframework.security.core.userdetails.User.builder()
                .username(user.getId())
                .roles("ROLE")
                .password(user.getPassword())
                .build();

        Authentication authentication
                = new UsernamePasswordAuthenticationToken(userDetails, null);

        SecurityContextHolder.getContext().setAuthentication(authentication);
        chain.doFilter(request, response);

    }
    public String extractId(String accessToken){
        return (JWT.require(jwtService.algorithm()).build()).verify(accessToken).getClaim("id").asString();
    }
}