package com.bank.shareaccount.group.controller;

import com.bank.shareaccount.global.jwt.JwtService;
import com.bank.shareaccount.group.dto.request.GroupMakeDto;
import com.bank.shareaccount.group.dto.request.GroupUpdateDto;
import com.bank.shareaccount.group.service.GroupServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequiredArgsConstructor
public class GroupController {
    private final GroupServiceImpl groupService;
    private final JwtService jwtService;
    @PostMapping("/groups")
    public ResponseEntity<?> make(@RequestBody GroupMakeDto groupMakeDto) {
        groupService.make(groupMakeDto);
        return null;
    }

    @PostMapping("/groups/{groupId}/exit")
    public ResponseEntity<?> exit(@PathVariable Long groupId) {
        groupService.exit(groupId);
        return null;
    }

    @PostMapping("/groups/{groupId}/approval/exit")
    public ResponseEntity<?> approvalExit(@PathVariable Long groupId, @RequestParam Long exitUserId) {
        // 어떤 방식으로든 탈퇴 요청을 보낸 유저에 대한 정보를 얻어와야함
        // 일단은 임시로 쿼리에 담아서 보내겠다
        groupService.approvalExit(groupId, exitUserId);
        return null;
    }

    @DeleteMapping("/groups/{groupId}")
    public ResponseEntity<?> delete(@PathVariable Long groupId) {
        groupService.delete(groupId);
        return null;
    }

    @GetMapping("/groups/{groupId}")
    public ResponseEntity<?> getInfo(@PathVariable Long groupId) {
        groupService.getInfo(groupId);
        return null;
    }

    @PutMapping("/groups/{groupId}")
    public ResponseEntity<?> update(@RequestBody GroupUpdateDto groupUpdateDto, @PathVariable Long groupId) {
        groupService.update(groupUpdateDto, groupId);
        return null;
    }
    @PostMapping("/groups/{groupId}")
    public ResponseEntity<?> joinGroup(@PathVariable String groupId, @AuthenticationPrincipal UserDetails userDetails){
          groupService.joinGroup(userDetails.getUsername(),groupId);
          return null;
    }
    @PostMapping("/groups/{groupId}/approval/join")
    public ResponseEntity<?> admitJoin(@PathVariable String groupId,@RequestBody String id){
        groupService.admitJoin(groupId,id);
        return null;
    }
}
