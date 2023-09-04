package com.bank.shareaccount.group.dto.request;

import lombok.Data;

import java.time.LocalDate;

@Data
public class GroupUpdateDto {
    private String groupName;
    private int goal;
    private LocalDate startDate; // <- 얜 왜 바꾸는거?
}