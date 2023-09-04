package com.bank.shareaccount.group.controller;

import com.bank.shareaccount.global.jwt.JwtService;
import com.bank.shareaccount.group.dto.request.GroupMakeDto;
import com.bank.shareaccount.group.dto.request.GroupUpdateDto;
import com.bank.shareaccount.group.dto.response.GroupInfoDto;
import com.bank.shareaccount.group.dto.response.GroupJoinLinkDto;
import com.bank.shareaccount.group.service.GroupServiceImpl;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@CrossOrigin
@RequiredArgsConstructor
@Slf4j
public class GroupController {
    private final GroupServiceImpl groupService;
    private final JwtService jwtService;
    @PostMapping("/groups")
    public ResponseEntity<?> make(@RequestBody GroupMakeDto groupMakeDto) {
        groupService.make(groupMakeDto);
        return null;
    }

    @PostMapping("/groups/{groupId}/exit")
    public ResponseEntity<?> exit(@PathVariable String groupName) {
        groupService.exit(groupName);
        return null;
    }

    @PostMapping("/groups/{groupId}/approval/exit")
    public ResponseEntity<?> approvalExit(@PathVariable String groupId, @RequestParam Long exitUserId) {
        // 어떤 방식으로든 탈퇴 요청을 보낸 유저에 대한 정보를 얻어와야함
        // 일단은 임시로 쿼리에 담아서 보내겠다
        groupService.approvalExit(groupId, exitUserId);
        return null;
    }

    @DeleteMapping("/groups/{groupId}")
    public ResponseEntity<?> delete(@PathVariable String groupId) {
        groupService.delete(groupId);
        return null;
    }

    @GetMapping("/groups/{groupId}")
    public ResponseEntity<?> getInfo(@PathVariable String groupId) {
        GroupInfoDto info = groupService.getInfo(groupId);
        return new ResponseEntity<>(info,HttpStatus.ACCEPTED);
    }

    @PutMapping("/groups/{groupName}")
    public ResponseEntity<?> update(@RequestBody GroupUpdateDto groupUpdateDto, @PathVariable String groupName) {
        groupService.update(groupUpdateDto, groupName);
        return null;
    }
    @PostMapping("/groups/{groupName}")
    public ResponseEntity<?> joinGroup(@PathVariable String groupName, @RequestBody Map<String,String> url, @AuthenticationPrincipal UserDetails userDetails){
        log.info("{}가 {}에 가입요청을 보냈다",userDetails.getUsername(),groupName);
        if(!groupService.isLinkValid(url.get("url"),groupName)){
            return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
        }
        groupService.joinGroup(userDetails.getUsername(),groupName);
          return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }
    @PostMapping("/groups/{groupName}/approval/join")
    public ResponseEntity<?> admitJoin(@PathVariable String groupName,@RequestBody Map<String,String> senderName){
        groupService.admitJoin(groupName,senderName.get("id"));
        return null;
    }
    @PostMapping("/groups/{groupId}/link")
    public ResponseEntity<String> createJoinLink(@PathVariable String groupId){
        return new ResponseEntity<>(groupService.createJoinLink(groupId), HttpStatus.ACCEPTED);
    }

    @GetMapping("/link/{linkId}")
    public ResponseEntity<GroupJoinLinkDto> link(@PathVariable String linkId){
        GroupJoinLinkDto link = groupService.link(linkId);
        return new ResponseEntity<>(link,HttpStatus.ACCEPTED);
    }
}
