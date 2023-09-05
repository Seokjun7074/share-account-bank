package com.bank.shareaccount.group.service;

import com.bank.shareaccount.group.dto.request.GroupMakeDto;
import com.bank.shareaccount.group.dto.request.GroupUpdateDto;
import com.bank.shareaccount.group.dto.response.GroupInfoDto;
import com.bank.shareaccount.group.dto.response.GroupJoinLinkDto;
import com.bank.shareaccount.group.entity.Group;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

public interface GroupService {
    void make(GroupMakeDto groupMakeDto, UserDetails userDetails);

    void exit(String groupName);

    void approvalExit(String groupName, String exitUserName);

    void delete(String groupName);

    GroupInfoDto getInfo(String groupName);

    void update(GroupUpdateDto groupUpdateDto, String groupName);

    Group getGroupByName(String groupName);

    void joinGroup(String userId, String groupName);

    void admitJoin(String groupName, String id);

    void addGroup(String groupName, String userId);

    String createJoinLink(String groupName);

    GroupJoinLinkDto link(String linkId);

    Boolean isLinkValid(String url, String groupName);
   
}
