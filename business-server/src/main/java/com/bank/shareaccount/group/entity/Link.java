package com.bank.shareaccount.group.entity;

import lombok.*;

import javax.persistence.*;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
@Builder
@AllArgsConstructor
public class Link {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "link_id")
    private long linkId;
    private String url;
    private boolean isUsed;
    private String user_id;

    @ManyToOne
    @JoinColumn(name = "group_id")
    private Group group;
}
