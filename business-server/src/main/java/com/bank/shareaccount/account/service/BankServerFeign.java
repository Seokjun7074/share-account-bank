package com.bank.shareaccount.account.service;

import com.bank.shareaccount.account.dto.request.AllAccountRequestDto;
import com.bank.shareaccount.account.dto.request.CreateAccountRequestDto;
import com.bank.shareaccount.account.dto.request.DepositAccountRequestDto;
import com.bank.shareaccount.account.dto.request.TransferAccountRequestDto;
import com.bank.shareaccount.global.config.FeignConfig;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@Component
@FeignClient(name = "${feign.bank.name}", url = "${feign.bank.url}", configuration = FeignConfig.class)
public interface BankServerFeign {
    // 이 파일 위치 어디에 둬여할지 모르겠음

    @PostMapping("/accounts")
    String open(@RequestBody CreateAccountRequestDto createAccountRequestDto);

    @PostMapping("/accounts/deposit")
    String deposit(@RequestBody DepositAccountRequestDto depositAccountRequestDto);

    @PostMapping("/accounts/transactions")
    String transactions(@RequestBody TransferAccountRequestDto transferAccountRequestDto);

    @GetMapping("/accounts")
    String getAccounts(@RequestBody AllAccountRequestDto allAccountRequestDto);

    @GetMapping("/accounts/{accountNumber}")
    String getDetail(@PathVariable String accountNumber);

    @GetMapping("/accounts/{accountsNumber}/group")
    String getDetailGroupAccount(@PathVariable String accountsNumber);
}
