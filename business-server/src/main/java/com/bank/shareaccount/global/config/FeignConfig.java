package com.bank.shareaccount.global.config;

import com.bank.shareaccount.account.service.BankServerFeign;
import feign.RequestInterceptor;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.logging.Level;

@Configuration
@EnableFeignClients(clients = BankServerFeign.class)
public class FeignConfig {
    @Bean
    Level feignLoggerLevel() {
        return Level.ALL; // log레벨 설정
    }

    @Bean
    public RequestInterceptor requestInterceptor() {
        return requestTemplate -> {
            requestTemplate.header("Content-Type", "application/json");
            requestTemplate.header("Accept", "application/json");
        };
    }
}
