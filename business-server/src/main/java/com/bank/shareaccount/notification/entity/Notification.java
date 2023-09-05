package com.bank.shareaccount.notification.entity;


import com.bank.shareaccount.group.entity.Group;
import com.bank.shareaccount.notification.Type;
import com.bank.shareaccount.user.entity.User;
import lombok.*;

import javax.persistence.*;
import java.util.Date;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
@Builder
@AllArgsConstructor
public class Notification {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "notification_id")
    private long notificationId;


    @ManyToOne
    private User receiver;

    @ManyToOne
    private User sender;

    @ManyToOne
    @JoinColumn(name = "group_id")
    private Group group;

    private String content;
    @Column(name = "notification_date")
    private Date date;
    @Column(name = "notification_type")
    private Type type;

}
