package com.forstuad.bankserver.dto.request;

import lombok.Data;

@Data
public class DepositAccountRequestDto {
    private String accountId;
    private int amount;
}
