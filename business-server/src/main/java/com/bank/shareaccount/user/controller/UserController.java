package com.bank.shareaccount.user.controller;

import com.bank.shareaccount.email.service.EmailService;
import com.bank.shareaccount.email.service.EmailServiceImpl;
import com.bank.shareaccount.user.dto.request.*;
import com.bank.shareaccount.user.dto.response.UserTokenResponseDto;
import com.bank.shareaccount.user.service.UserServiceImpl;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin
@RequiredArgsConstructor
@Slf4j
public class UserController {

    private final UserServiceImpl userService;
    private final EmailService emailService;

    @PostMapping("/signup")
    public ResponseEntity<?> signUp(@RequestBody UserSignUpDto userSignUpDto) {
        log.info("회원가입 진입 : {}", userSignUpDto.getId());
        userService.signUp(userSignUpDto);
        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }
//    @PostMapping("/signout")
//    public ResponseEntity<?> signOut(){
//        log.info()
//    }

    @PutMapping("/users")
    public ResponseEntity<?> updateUserInfo(@RequestBody UserUpdateDto userUpdateDto) {
        return null;
    }

    @PostMapping("/login")
    public ResponseEntity<UserTokenResponseDto> login(@RequestBody UserLoginDto userLoginDto, HttpServletResponse response) {
        String access = response.getHeader("Authorization");
        String refresh = response.getHeader("Authorization-refresh");
        UserTokenResponseDto userTokenResponseDto = new UserTokenResponseDto(access, refresh);
        return new ResponseEntity<>(userTokenResponseDto,HttpStatus.ACCEPTED);

    }

    @GetMapping
    public ResponseEntity<?> getUserInfo() {
        return null;
    }

    @PutMapping("/password")
    public ResponseEntity<?> changePassword(@RequestBody UserChangePasswordDto userChangePasswordDto) {
        return null;
    }

    @PostMapping("/email")
    public ResponseEntity<?> mailConfirm(@RequestBody UserEmailDto userEmailDto) throws Exception {
        String code =emailService.sendSimpleMessage(userEmailDto.getEmail());
        log.info("인증코드 : " + code);
        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }
    @PostMapping("/email/verification")
    public ResponseEntity<?> emailVerify(@RequestBody UserCodeDto userCodeDto) throws ChangeSetPersister.NotFoundException {
        emailService.verifyEmail(userCodeDto.getCode());
        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }
}

