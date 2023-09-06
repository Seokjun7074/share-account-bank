package com.forstuad.bankserver.dto;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class CashFlowHistory {
    private LocalDateTime time;
    private String sender;
    private String receiver;
    private int amount;
    private String type;
}
