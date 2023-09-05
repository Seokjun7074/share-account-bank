package com.bank.shareaccount.user.dto.request;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public class UserUpdateDto {
    private String phone;
    private String id;
    private String currentPassword;
    private String newPassword;
    private String newPasswordCheck;
}
