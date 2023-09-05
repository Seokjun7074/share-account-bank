package com.bank.shareaccount.group.entity;

import com.bank.shareaccount.user.entity.User;
import lombok.*;

import javax.persistence.*;

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