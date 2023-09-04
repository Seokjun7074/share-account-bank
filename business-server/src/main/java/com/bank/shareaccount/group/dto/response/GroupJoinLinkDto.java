package com.bank.shareaccount.group.dto.response;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class GroupJoinLinkDto {
    private String groupName;
    private boolean isUsed;
}
