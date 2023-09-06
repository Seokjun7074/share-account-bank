package com.forstuad.bankserver.dto.response;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Builder
public class GroupAccountResponseDto {
    String groupName;
    String account;
    int goal;
    int balance;
    int dues;
    int duesDate;
    LocalDateTime startDate;
    int member;
    String money;
}
