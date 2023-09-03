package com.bank.shareaccount.group.service;

import com.bank.shareaccount.group.dto.request.GroupMakeDto;
import com.bank.shareaccount.group.dto.request.GroupUpdateDto;
import com.bank.shareaccount.group.dto.response.GroupInfoDto;
import com.bank.shareaccount.group.entity.Access;
import com.bank.shareaccount.group.entity.Group;
import com.bank.shareaccount.group.entity.Group_User;
import com.bank.shareaccount.group.repository.AccessRepository;
import com.bank.shareaccount.group.repository.GroupRepository;
import com.bank.shareaccount.group.repository.Group_UserRepository;
import com.bank.shareaccount.notification.Type;
import com.bank.shareaccount.notification.entity.Notification;
import com.bank.shareaccount.notification.repository.NotificationRepository;
import com.bank.shareaccount.user.entity.User;
import com.bank.shareaccount.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
@Service
@RequiredArgsConstructor
public class GroupServiceImpl implements GroupService {
    private final UserRepository userRepository;
    private final GroupRepository groupRepository;
    private final NotificationRepository notificationRepository;
    private final AccessRepository accessRepository;
    private final Group_UserRepository group_userRepository;

    @Override
    public void make(GroupMakeDto groupMakeDto) {
        User user = userRepository.findByAccount(groupMakeDto.getAccount()).orElseThrow(IllegalArgumentException::new);
        Group group = groupMakeDto.toEntity();

        Group_User group_user = Group_User.builder().build();

        user.joinGroup(group_user);
        group.addMember(group_user);
        group.setLeader(user);

        groupRepository.save(group);
        group_userRepository.save(group_user);
    }

    @Override
    public void exit(Long groupId) {
        // 어느 특정 사용자가 해당 아이디의 그룹을 탈퇴하고 싶음
        // 탈퇴하려면 일단 방장의 승인을 받아야함 = 방장한테 알림을 줘야함
        Group group = getGroupById(groupId);

        // 이제 리더한테 알림을 주면됨
        User leader = group.getLeader();
    }

    @Override
    public void approvalExit(Long groupId, Long exitUserId) {
        Group group = getGroupById(groupId);
        User exitUser = userRepository.findById(exitUserId).orElseThrow(IllegalArgumentException::new);

        Group_User group_user = group_userRepository.findGroup_UserByGroupAndUser(group, exitUser).orElseThrow(IllegalArgumentException::new);


        // 지워야할거
        // 1. 그룹에서 해당 유저를 지움
        group.exitMember(group_user);

        // 2. 유저에서 해당 그룹을 지움
        exitUser.exitGroup(group_user);

        // 3. 그룹유저에서 두개의 외래키로 연결되어있는거 지움
        group_userRepository.delete(group_user);
    }

    @Override
    public void delete(Long groupId) {
        Group group = getGroupById(groupId);
        // 어케 지워야할까

        // 일단 해당 그룹에 포함되어있는애들 다 빼자
        List<Group_User> members = group.getMembers();
        for (var member : members) {
            member.getUser().exitGroup(member);
        }

        // 그룹과 그룹유저는 cascade로 연결되어있으니 지워졌을까? 그랬을듯?
    }

    @Override
    public GroupInfoDto getInfo(Long groupId) {
        // 뭘 보여줘야하는지 모르겠다 그냥 다 넘긴다
        GroupInfoDto groupInfoDto = GroupInfoDto.builder().build();
        return GroupInfoDto.from(getGroupById(groupId));
    }

    @Override
    public void update(GroupUpdateDto groupUpdateDto, Long groupId) {
        getGroupById(groupId).update(groupUpdateDto);
    }

    @Override
    public Group getGroupById(Long groupId) {
        return groupRepository.findById(groupId).orElseThrow(IllegalArgumentException::new);
    }

    @Override
    public void joinGroup(String userId, String groupId) {
        // 그룹장에게 알림 보내기, access에 넣기.
        Group group = groupRepository.findByName(groupId).orElseThrow(IllegalAccessError::new);
        User sender = userRepository.findById(userId).orElseThrow(IllegalAccessError::new);
        Notification notification = Notification.builder()
                .receiver(group.getLeader())
                .sender(sender)
                .type(Type.JOIN)
                .group(group)
                .build();
        Access access = Access.builder()
                .group(group)
                .user(sender)
                .build();
        notificationRepository.save(notification);
        accessRepository.save(access);
    }

    @Override
    public void admitJoin(String groupId, String id) {
        // 그룹에 넣기
        addGroup(groupId,id);
    }

    @Override
    public void addGroup(String groupId, String userId) {
        User user = userRepository.findById(userId).orElseThrow(IllegalAccessError::new);
        Group group = groupRepository.findByName(groupId).orElseThrow(IllegalAccessError::new);
        Group_User group_user = Group_User.builder()
                .group(group)
                .user(user)
                .build();
        group_userRepository.save(group_user);
    }


}
