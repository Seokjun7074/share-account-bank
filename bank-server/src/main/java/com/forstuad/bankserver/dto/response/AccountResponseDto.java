package com.forstuad.bankserver.dto.response;

import com.forstuad.bankserver.dto.CashFlowHistory;
import lombok.Data;
import java.util.List;

@Data
public class AccountResponseDto {
    private String accountId;
    private int balance;
    private Long groupId;
    private boolean isGroup;
}
