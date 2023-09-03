package com.bank.shareaccount.group.service;

import com.bank.shareaccount.group.dto.request.GroupMakeDto;
import com.bank.shareaccount.group.dto.request.GroupUpdateDto;
import com.bank.shareaccount.group.dto.response.GroupInfoDto;
import com.bank.shareaccount.group.entity.Group;

public interface GroupService {
    void make(GroupMakeDto groupMakeDto);

    void exit(Long groupId);

    void approvalExit(Long groupId, Long exitUserId);

    void delete(Long groupId);

    GroupInfoDto getInfo(Long groupId);

    void update(GroupUpdateDto groupUpdateDto, Long groupId);

    Group getGroupById(Long groupId);
    void joinGroup(String userId, String groupId);
    void admitJoin(String groupId, String id);
    void addGroup(String groupId, String userId);
}
