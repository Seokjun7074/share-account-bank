package com.bank.shareaccount.user.dto.request;

import com.bank.shareaccount.user.entity.User;
import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public class UserSignUpDto {
    private String name;
    private String phone;
    private String account;
    private String id;
    private String password;
    private String passwordCheck;

    public User toEntity(){
        return User.builder()
                .id(id)
                .name(name)
                .password(password)
                .phone(phone)
                .account(account)
                .build();
    }
}
