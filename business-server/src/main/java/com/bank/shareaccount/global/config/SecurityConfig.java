package com.bank.shareaccount.global.config;

import com.bank.shareaccount.global.filter.JwtAuthorizationFilter;
import com.bank.shareaccount.global.filter.LoginFilter;
import com.bank.shareaccount.global.filter.LogoutFilter;
import com.bank.shareaccount.global.jwt.JwtService;
import com.bank.shareaccount.user.repository.UserRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.access.intercept.AuthorizationFilter;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@RequiredArgsConstructor
@Configuration
@EnableWebSecurity
@Slf4j
public class SecurityConfig {
    private final JwtService jwtService;
    private final UserRepository userRepository;
    private final ObjectMapper objectMapper;

    private final RedisTemplate redisTemplate;
    private final String[] permitUrl = new String[]{"/login", "/signup"};


    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and()
                .csrf().disable()
                .authorizeRequests()
                .antMatchers(permitUrl).permitAll();

        http.addFilterAfter(new LogoutFilter(userRepository, jwtService), AuthorizationFilter.class);
        http.addFilterBefore(new JwtAuthorizationFilter(jwtService, userRepository, permitUrl), AuthorizationFilter.class);
        http.addFilterBefore(new LoginFilter(objectMapper, userRepository, jwtService,redisTemplate), UsernamePasswordAuthenticationFilter.class);

        http.logout().disable();

        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {//1 - PasswordEncoder 등록
        return PasswordEncoderFactories.createDelegatingPasswordEncoder();
    }

}
