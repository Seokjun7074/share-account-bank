package com.forstuad.bankserver.util;

import com.forstuad.bankserver.repository.AccountRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.Random;

@Service
@AllArgsConstructor
public class AccountUtilServiceImp implements AccountUtilService{

    private final AccountRepository accountRepository;

    @Override
    public boolean isAccountIdDuplicated(String accountId) {
        return accountRepository.findByAccountId(accountId)!=null;
    }

    @Override
    public String createAccountId() {
        Random random = new Random();
        // XXX - YYY - ZZZZZZ 형식으로 계좌 번호 생성하는 메소드

        // XXX 부분을 100~139 사이의 랜덤한 숫자로 생성
        int firstPart = random.nextInt(40) + 100;

        // YYY 부분을 100~999 사이의 랜덤한 숫자로 생성
        int secondPart = random.nextInt(900) + 100;

        // ZZZZZZ 부분을 100000~999999 사이의 랜덤한 숫자로 생성
        int thirdPart = random.nextInt(900000) + 100000;

        // 계좌 번호를 XXX-YYY-ZZZZZZ 형식으로 생성
        String accountId = String.format("%03d-%03d-%06d", firstPart, secondPart, thirdPart);

        // 중복된 계좌 번호가 생성되지 않도록 확인
        while (isAccountIdDuplicated(accountId)) {
            firstPart = new Random().nextInt(40) + 100; // 100 ~ 139
            secondPart = new Random().nextInt(1000); // 0 ~ 999
            thirdPart = new Random().nextInt(999999) + 1; // 1 ~ 999999
            accountId = String.format("%03d-%03d-%06d", firstPart, secondPart, thirdPart);
        }

        return accountId;
    }
}
