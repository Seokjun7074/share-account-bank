package com.bank.shareaccount.user.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public class UserTokenResponseDto {
    private String accessToken;
    private String refreshToken;
}
