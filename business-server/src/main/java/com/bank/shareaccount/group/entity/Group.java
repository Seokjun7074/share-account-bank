package com.bank.shareaccount.group.entity;

import com.bank.shareaccount.group.Money;
import com.bank.shareaccount.group.dto.request.GroupUpdateDto;
import com.bank.shareaccount.user.entity.User;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
@Builder
@AllArgsConstructor
@Table(name = "GroupTable")
public class Group {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "group_id")
    private Long groupId;
    @Column(name = "group_name")
    private String name;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User leader;

    @Column(name = "group_account")
    private String account;

    @OneToMany(mappedBy = "group", cascade = CascadeType.ALL)
    private List<Group_User> members = new ArrayList<>();

    private int goal; // 목표 금액

    @Column(name = "dues_date")
    private int duesDate;// 매달 자동이체 일

    private int dues; // 매달 자동이체 금액

    @Column(name = "limit_users")
    private int limit; // 그룹 제한 인원

    private LocalDate startDate;

    private Money money; // 가고자 하는 나라의 화폐 단위

    private String link;

    public void setLeader(User user) {
        this.leader = user;
    }

    public void addMember(Group_User group_user) {
        group_user.setGroup(this);
        members.add(group_user);
    }

    public void exitMember(Group_User group_user){
        members.remove(group_user);
    }

    public void update(GroupUpdateDto groupUpdateDto){
        this.name = groupUpdateDto.getGroupName();
        this.goal = groupUpdateDto.getGoal();
        this.startDate = groupUpdateDto.getStartDate();
    }
}
