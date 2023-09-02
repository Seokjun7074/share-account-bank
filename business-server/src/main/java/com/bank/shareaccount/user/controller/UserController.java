package com.bank.shareaccount.user.controller;

import com.bank.shareaccount.user.dto.request.UserChangePasswordDto;
import com.bank.shareaccount.user.dto.request.UserLoginDto;
import com.bank.shareaccount.user.dto.request.UserSignUpDto;
import com.bank.shareaccount.user.dto.request.UserUpdateDto;
import com.bank.shareaccount.user.dto.response.UserTokenResponseDto;
import com.bank.shareaccount.user.service.UserServiceImpl;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequiredArgsConstructor
@Slf4j
public class UserController {

    private final UserServiceImpl userService;

    @PostMapping("/signup")
    public ResponseEntity<UserTokenResponseDto> signUp(@RequestBody UserSignUpDto userSignUpDto) {
        log.info("회원가입 진입 : {}", userSignUpDto.getId());
        UserTokenResponseDto userTokenResponseDto = userService.signUp(userSignUpDto);
        return new ResponseEntity<>(userTokenResponseDto, HttpStatus.ACCEPTED);
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
    public ResponseEntity<?> login(@RequestBody UserLoginDto userLoginDto) {
        log.info("아이디 : {}    비밀번호: {}", userLoginDto.getId(), userLoginDto.getPassword());

        return null;
    }
    @GetMapping("/test")
    public ResponseEntity<?> test(){
        log.info("test");
        return null;
    }
    @GetMapping
    public ResponseEntity<?> getUserInfo() {
        return null;
    }

    @PutMapping("/password")
    public ResponseEntity<?> changePassword(@RequestBody UserChangePasswordDto userChangePasswordDto) {
        return null;
    }
}

