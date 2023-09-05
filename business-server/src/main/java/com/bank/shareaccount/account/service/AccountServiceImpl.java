package com.bank.shareaccount.account.service;

import com.bank.shareaccount.account.dto.request.AllAccountRequestDto;
import com.bank.shareaccount.account.dto.request.CreateAccountRequestDto;
import com.bank.shareaccount.account.dto.request.DepositAccountRequestDto;
import com.bank.shareaccount.account.dto.request.TransferAccountRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class AccountServiceImpl {
    private final BankServerFeign bankServerFeign;

    public String accountOpening() {
        CreateAccountRequestDto createAccountRequestDto = new CreateAccountRequestDto();
        createAccountRequestDto.setUserId(1L);
        return bankServerFeign.open(createAccountRequestDto);
    }

    public String deposit() {
        DepositAccountRequestDto depositAccountRequestDto = new DepositAccountRequestDto();
        depositAccountRequestDto.setAccountId("112-146-730638");
        depositAccountRequestDto.setAmount(10000);
        return bankServerFeign.deposit(depositAccountRequestDto);
    }

    public String transactions(){
        TransferAccountRequestDto transferAccountRequestDto = new TransferAccountRequestDto();
        transferAccountRequestDto.setReceiver("113-122-231106");
        transferAccountRequestDto.setSender("112-146-730638");
        transferAccountRequestDto.setAmount(10000);
        return bankServerFeign.transactions(transferAccountRequestDto);
    }

    public String getAccounts() {
        AllAccountRequestDto allAccountRequestDto = new AllAccountRequestDto();
        allAccountRequestDto.setUserId(1L);
        return bankServerFeign.getAccounts(allAccountRequestDto);
    }

    public String getDetail(String accountNumber){
        return bankServerFeign.getDetail(accountNumber);
    }

    public String getDetailGroupAccount(String accountNumber){
        return bankServerFeign.getDetailGroupAccount(accountNumber);
    }
}
