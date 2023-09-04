package com.bank.shareaccount.group.entity;

import com.bank.shareaccount.user.entity.User;
import lombok.*;
import javax.persistence.*;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
@Builder
@AllArgsConstructor
public class Access {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "access_id")
    private long accessId;

    @ManyToOne
    @JoinColumn(name="group_id")
    private Group group;
    @ManyToOne
    @JoinColumn(name="user_id")
    private User user;
    boolean isAccessed;
}