package com.bank.shareaccount.group.dto.request;

import com.bank.shareaccount.group.Money;
import com.bank.shareaccount.group.entity.Group;
import lombok.Data;

import java.time.LocalDate;

@Data
public class GroupMakeDto {
    private String groupName;
    private String account;
    private int goal;
    private int dues;
    private int duesDate;
    private LocalDate startDate;
    private int limitMember;
    private String money;

    public Group toEntity() {
        return Group.builder()
                .name(groupName)
                .account(account)
                .goal(goal)
                .dues(dues)
                .duesDate(duesDate)
                .startDate(startDate)
                .limit(limitMember)
                .money(Money.valueOf(money.toUpperCase()))
                .build();
    }
}