package com.bank.shareaccount.account.controller;

import com.bank.shareaccount.account.service.AccountServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
public class AccountController {

    private final AccountServiceImpl accountService;

    @PostMapping("/accounts")
    public ResponseEntity<?> accountOpening() {
        // 계좌 생성
        return new ResponseEntity<>(accountService.accountOpening(), HttpStatus.ACCEPTED);
    }

    @PostMapping("/accounts/deposit")
    public ResponseEntity<?> deposit() {
        // 계좌 입금
        return new ResponseEntity<>(accountService.deposit(), HttpStatus.ACCEPTED);
    }

    @PostMapping("/accounts/verification")
    public ResponseEntity<?> verification() {
        // 계좌 인증
        return null;
    }

    @PostMapping("/accounts/transactions")
    public ResponseEntity<?> transactions() {
        // 계좌 이체
        return new ResponseEntity<>(accountService.transactions(), HttpStatus.ACCEPTED);
    }

    @GetMapping("/accounts")
    public ResponseEntity<?> getAccounts() {
        // 전체 계좌 조회
        return new ResponseEntity<>(accountService.getAccounts(), HttpStatus.ACCEPTED);
    }

    @GetMapping("/accounts/{accountNumber}")
    public ResponseEntity<?> getDetailAccount(@PathVariable String accountNumber) {
        // 계좌 상세정보 조회
        return new ResponseEntity<>(accountService.getDetail(accountNumber), HttpStatus.ACCEPTED);
    }

    @GetMapping("/accounts/{accountNumber}/group")
    public ResponseEntity<?> getDetailGroupAccount(@PathVariable String accountNumber){
        // 그룹계좌 상세정보 조회
        return new ResponseEntity<>(accountService.getDetailGroupAccount(accountNumber), HttpStatus.ACCEPTED);
    }

    @PostMapping("/accounts/{accountNumber}")
    public ResponseEntity<?> cancellation(@PathVariable String accountNumber) {
        // 계좌 해지
        return null;
    }

    @PostMapping("/accounts/group")
    public ResponseEntity<?> appointAccount() {
        // 계좌 지정
        return null;
    }

    @GetMapping("/exchangeRate")
    public ResponseEntity<?> getExchangeRate() {
        // 환율 우대율 조회
        return null;
    }
}
