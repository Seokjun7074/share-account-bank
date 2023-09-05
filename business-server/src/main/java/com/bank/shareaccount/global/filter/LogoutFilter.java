package com.bank.shareaccount.global.filter;

import com.bank.shareaccount.global.jwt.JwtService;
import com.bank.shareaccount.user.entity.User;
import com.bank.shareaccount.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@RequiredArgsConstructor
@Slf4j
public class LogoutFilter extends OncePerRequestFilter {
    private final UserRepository userRepository;
    private final JwtService jwtService;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        if (!request.getRequestURI().equals("/logout")) {
            filterChain.doFilter(request, response);
            return;
        }
        log.info("로그아웃 필터 진입");
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        UserDetails userDetails = (UserDetails) principal;

        String id = userDetails.getUsername();

        log.info("유저 id : {}", id);
        User user = userRepository.findById(id).get();

        String expiredToken = jwtService.createExpiredToken();
        jwtService.sendBothToken(response, expiredToken, expiredToken);

        filterChain.doFilter(request, response);
    }
}
