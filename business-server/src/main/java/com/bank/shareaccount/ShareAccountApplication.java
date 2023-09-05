package com.bank.shareaccount;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
public class ShareAccountApplication {

	public static void main(String[] args) {
		SpringApplication.run(ShareAccountApplication.class, args);
	}

}
