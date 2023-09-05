package com.bank.shareaccount.user.dto.request;

import lombok.Data;

@Data
public class UserLoginDto {
    private String id;
    private String password;
}
