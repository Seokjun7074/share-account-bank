package com.forstuad.bankserver.domain;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@NoArgsConstructor

public class Account {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "user_name")
    private String userName;

    @Column(name = "group_id")
    private long groupId;

    @Column(name = "account_id")
    private String accountId;

    private int balance;

    private boolean isGroup;

    private int goal;

    private String groupName;

    private int dues;

    private int duesDate;

    private LocalDateTime startDate;

    private int member;

    private String money;
    @Builder
    public Account(String userName, long groupId, String accountId, int balance, boolean isGroup) {
        this.userName = userName;
        this.groupId = groupId;
        this.accountId = accountId;
        this.balance = balance;
        this.isGroup = isGroup;
    }
}

