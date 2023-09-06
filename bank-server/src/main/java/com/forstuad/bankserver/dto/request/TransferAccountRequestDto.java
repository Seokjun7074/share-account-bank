package com.forstuad.bankserver.dto.request;

import lombok.Data;

@Data
public class TransferAccountRequestDto {
    private String sender;
    private String receiver;
    private int amount;
}
