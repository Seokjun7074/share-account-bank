package com.forstuad.bankserver.dto.request;

import lombok.Data;

import java.util.List;

@Data
public class GroupIdsRequestDto {
    List<Long> groupIds;
}
