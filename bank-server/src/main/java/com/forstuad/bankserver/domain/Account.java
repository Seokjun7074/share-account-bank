package com.forstuad.bankserver.domain;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@NoArgsConstructor

public class Account {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "user_id")
    private long userId;

    @Column(name = "group_id")
    private long groupId;

    @Column(name = "account_id")
    private String accountId;

    private int money;

    private boolean isGroup;

    @Builder
    public Account(long userId, long groupId, String accountId, int money, boolean isGroup) {
        this.userId = userId;
        this.groupId = groupId;
        this.accountId = accountId;
        this.money = money;
        this.isGroup = isGroup;
    }
}
