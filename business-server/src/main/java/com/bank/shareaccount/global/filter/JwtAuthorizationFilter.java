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
import org.springframework.util.AntPathMatcher;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

@Transactional
@Slf4j
@RequiredArgsConstructor
public class JwtAuthorizationFilter extends OncePerRequestFilter {

    private final JwtService jwtService;
    private final UserRepository userRepository;
    private final AntPathMatcher pathMatcher = new AntPathMatcher();

    private final List<String> permitUrl;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain) throws IOException, ServletException {
        if (isPermitURI(request.getRequestURI())) {
            chain.doFilter(request, response);
            return;
        }

        String refreshToken = jwtService.extractRefreshToken(request)
                .filter(jwtService::isTokenValid)
                .orElse(null);

        // 1. refresh != null  ->  accessToken 만료로 인한 재발급 요청
        if (refreshToken != null) {
            log.info("리프레시 토큰 감지");
            try {
                jwtService.checkRefreshToken(response, refreshToken, extractId(jwtService.extractAccessToken(request).get()));
            } catch (Exception e) {
                log.info("엑세스 토큰 재발급 중 에러 발생");
                throw new RuntimeException(e);
            }
            return;
        }

        // 2. accessToken 확인
        String accessToken = jwtService.extractAccessToken(request)
                .filter(jwtService::isTokenValid)
                .orElse(null);

        if (accessToken == null) {
            log.info("엑세스 토큰 찾을 수 없음");
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            return;
        }

        log.info("엑세스 토큰 감지");
        String id = extractId(accessToken);

        User user = userRepository.findById(id).orElseThrow(IllegalArgumentException::new);

        UserDetails userDetails = org.springframework.security.core.userdetails.User.builder()
                .username(user.getId())
                .roles("ROLE")
                .password(user.getPassword())
                .build();

        Authentication authentication
                = new UsernamePasswordAuthenticationToken(userDetails, null);

        SecurityContextHolder.getContext().setAuthentication(authentication);
        log.info("엑세스 토큰 확인, 사용자 정보 저장");
        chain.doFilter(request, response);

    }

    public String extractId(String accessToken) {
        return (JWT.require(jwtService.algorithm()).build()).verify(accessToken).getClaim("id").asString();
    }

    public boolean isPermitURI(String uri) {
        for (String permitUrl : permitUrl) {
            if (pathMatcher.match(permitUrl, uri)) {
                return true;
            }
        }

        return false;
    }
}