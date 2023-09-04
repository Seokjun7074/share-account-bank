package com.forstuad.bankserver.domain;

import jakarta.persistence.*;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@NoArgsConstructor

public class CashFlow {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long sender;

    private Long receiver;

    private int amount;

    private LocalDateTime dateTime;

    @Builder
    public CashFlow(Long sender, Long receiver, int amount, LocalDateTime dateTime) {
        this.sender = sender;
        this.receiver = receiver;
        this.amount = amount;
        this.dateTime = dateTime;
    }
}
