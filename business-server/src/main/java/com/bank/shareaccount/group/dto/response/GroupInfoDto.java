package com.bank.shareaccount.group.dto.response;

import com.bank.shareaccount.group.Money;
import com.bank.shareaccount.group.entity.Group;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;

@Builder
@Data
public class GroupInfoDto {
    private String groupName;
    private String account;
    private int goal;
    private int dues;
    private int duesDate;
    private LocalDate startDate;
    private int limitMember;
    private String money;

    public static GroupInfoDto from(Group group) {
        return GroupInfoDto.builder()
                .groupName(group.getName())
                .account(group.getAccount())
                .goal(group.getGoal())
                .dues(group.getDues())
                .duesDate(group.getDuesDate())
                .startDate(group.getStartDate())
                .limitMember(group.getLimit())
                .money(group.getMoney().toString())
                .build();
    }
}