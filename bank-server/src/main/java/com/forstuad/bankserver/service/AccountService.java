package com.forstuad.bankserver.service;

import com.forstuad.bankserver.domain.Account;
import com.forstuad.bankserver.domain.CashFlow;
import com.forstuad.bankserver.dto.CashFlowHistory;
import java.util.List;

public interface AccountService {
    public void saveAccount(Account account);
    public Account findByAccountId(String accountId);
    public void deposit(String accountId,int balance);
    public Account createAccount(String userName);
    public void transferAccount(String sender,String receiver,int amount);
    public List<CashFlowHistory> getCashFlowList(String accountId);
    public List<Account> findAllByUserName(String userName);
    public void disableGroupAccount(String accountId);
    public void assignGroupAccount(String accountId,Long groupId);
    public List<Account> findGroupAccountByGroupIds(List<Long> groupIds);
}
