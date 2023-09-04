package com.bank.shareaccount.group.service;

import com.bank.shareaccount.group.dto.request.GroupMakeDto;
import com.bank.shareaccount.group.dto.request.GroupUpdateDto;
import com.bank.shareaccount.group.dto.response.GroupInfoDto;
import com.bank.shareaccount.group.dto.response.GroupJoinLinkDto;
import com.bank.shareaccount.group.entity.Group;

public interface GroupService {
    void make(GroupMakeDto groupMakeDto);

    void exit(String groupId);

    void approvalExit(String groupId, Long exitUserId);

    void delete(String groupId);

    GroupInfoDto getInfo(String groupName);

    void update(GroupUpdateDto groupUpdateDto, String groupName);

    Group getGroupByName(String groupName);
    void joinGroup(String userId, String groupId);
    void admitJoin(String groupId, String id);
    void addGroup(String groupId, String userId);
    String createJoinLink(String groupId);
    GroupJoinLinkDto link(String linkId);
    Boolean isLinkValid(String url, String groupId);
}
