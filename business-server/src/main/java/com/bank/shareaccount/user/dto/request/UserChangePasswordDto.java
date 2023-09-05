package com.bank.shareaccount.user.dto.request;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public class UserChangePasswordDto {
    private String id;
    private String name;
    private String password;
    private String passwordCheck;
}
