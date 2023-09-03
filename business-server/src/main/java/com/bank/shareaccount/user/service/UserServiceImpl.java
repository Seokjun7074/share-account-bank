package com.bank.shareaccount.user.service;

import com.bank.shareaccount.global.jwt.JwtService;
import com.bank.shareaccount.user.dto.request.UserChangePasswordDto;
import com.bank.shareaccount.user.dto.request.UserSignUpDto;
import com.bank.shareaccount.user.dto.request.UserUpdateDto;
import com.bank.shareaccount.user.dto.response.UserInfoResponseDto;
import com.bank.shareaccount.user.dto.response.UserTokenResponseDto;
import com.bank.shareaccount.user.entity.User;
import com.bank.shareaccount.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.servlet.http.HttpServletResponse;

@Service
@RequiredArgsConstructor
@Transactional
public class UserServiceImpl implements UserService{

    private final JwtService jwtService;
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public UserTokenResponseDto signUp(UserSignUpDto userSignUpDto) {
        User user= userSignUpDto.toEntity();
        user.passwordEncode(passwordEncoder);
        userRepository.save(user);
        return null;
    }

    @Override
    public void updateUserInfo(UserUpdateDto userUpdateDto) {

    }

    @Override
    public UserInfoResponseDto getUserInfo(String userId) {
        return null;
    }

    @Override
    public void changePassword(UserChangePasswordDto userChangePasswordDto) {

    }

    @Override
    public User getUserById(String id) {
        return userRepository.findById(id).orElseThrow(IllegalAccessError::new);
    }
}
