package com.forstuad.bankserver.controller;

import com.forstuad.bankserver.domain.Account;
import com.forstuad.bankserver.dto.CashFlowHistory;
import com.forstuad.bankserver.dto.request.*;
import com.forstuad.bankserver.dto.response.AccountResponseDto;
import com.forstuad.bankserver.dto.response.GroupAccountResponseDto;
import com.forstuad.bankserver.service.AccountService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@Slf4j
@RequestMapping("/accounts")
public class BankController {

    private final AccountService accountService;

    //계좌 생성
    @PostMapping
    public ResponseEntity<Map<String,Object>> create(
            @RequestBody CreateAccountRequestDto createAccountRequestDto
            )
    {
        Map<String, Object> response = new HashMap<>();
        try {
            String userName = createAccountRequestDto.getUserName();
            Account newAccount = accountService.createAccount(userName);
            response.put("account", newAccount);
            return new ResponseEntity<>(response, HttpStatus.CREATED);
        } catch (Exception e) {
            response.put("message", e.getMessage());
            return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //계좌 입금
    @PostMapping("/deposit")
    public ResponseEntity<Map<String,Object>> deposit(
            @RequestBody DepositAccountRequestDto depositAccountRequestDto
    )
    {
        Map<String, Object> response = new HashMap<>();
        try {
            accountService.deposit(
                    depositAccountRequestDto.getAccountId(),
                    depositAccountRequestDto.getAmount()
            );
            response.put("status", "success");
            return new ResponseEntity<>(response, HttpStatus.CREATED);
        } catch (Exception e) {
            response.put("status", "error");
            response.put("message", e.getMessage());
            return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    //계좌 인증 (미구현)
    @PostMapping("/verification")
    public ResponseEntity<Map<String,Object>> verification(){
        Map<String,Object> response = new HashMap<>();

        return new ResponseEntity<>(response,HttpStatus.ACCEPTED);
    }

    // 계좌 이체
    @PostMapping("/transactions")
    public ResponseEntity<Map<String, Object>> transfer(
            @RequestBody TransferAccountRequestDto transferAccountRequestDto
    ){
        Map<String, Object> response = new HashMap<>();

        try {
            accountService.transferAccount(
                    transferAccountRequestDto.getSender(),
                    transferAccountRequestDto.getReceiver(),
                    transferAccountRequestDto.getAmount()
            );
            response.put("message", "Transfer successful");
            return new ResponseEntity<>(response, HttpStatus.ACCEPTED);
        } catch (Exception e) {
            response.put("message", "Transfer failed: " + e.getMessage());
            return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
        }
    }

    //전체 계좌 조회
    @GetMapping
    public ResponseEntity<Map<String,Object>> accountList(
            @RequestBody AllAccountRequestDto allAccountRequestDto
            )
    {
        Map<String,Object> response = new HashMap<>();

        try {
            String userName = allAccountRequestDto.getUserName();
            List<Account> userAccounts = accountService.findAllByUserName(userName);
            List<AccountResponseDto> accountResponseDtos = new ArrayList<>();

            for(Account account : userAccounts){
                AccountResponseDto accountResponseDto = new AccountResponseDto();
                accountResponseDto.setGroup(account.isGroup());
                accountResponseDto.setGroupId(account.getGroupId());
                accountResponseDto.setBalance(account.getBalance());
                accountResponseDto.setAccountId(account.getAccountId());
                accountResponseDtos.add(accountResponseDto);
            }
            response.put("accountList",accountResponseDtos);
            return new ResponseEntity<>(response, HttpStatus.ACCEPTED);
        } catch (Exception e) {
            response.put("status", "failed");
            response.put("message", "Reading All Account failed: " + e.getMessage());
            return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //계좌 상세 조회
    @GetMapping("/{accountId}")
    public ResponseEntity<Map<String,Object>> account(
            @PathVariable String accountId
    ){
        Map<String,Object> response = new HashMap<>();

        try {
            Account account = accountService.findByAccountId(accountId);
            // AccountResponseDto accountResponseDto = new AccountResponseDto();
            // accountResponseDto.setAccountId(account.getAccountId());
            // accountResponseDto.setBalance(account.getBalance());
            // accountResponseDto.setGroupId(accountResponseDto.getGroupId());
            // accountResponseDto.setGroup(accountResponseDto.isGroup());

            //계좌 입출금 내역
            List<CashFlowHistory> cashFlowList = accountService.getCashFlowList(accountId);

            response.put("accountId",accountId);
            response.put("balance",account.getBalance());
            response.put("historyList",cashFlowList);

            return new ResponseEntity<>(response, HttpStatus.ACCEPTED);
        } catch (Exception e) {
            response.put("status", "failed");
            response.put("message", "Account Reading failed: " + e.getMessage());
            return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    //그룹계좌 지정
    @PostMapping("/{accountId}/group")
    public ResponseEntity<?> assignGroupAccount(@PathVariable String accountId,@RequestBody long groupId){
        accountService.assignGroupAccount(accountId,groupId);

        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }
    //그룹계좌 해제
    @DeleteMapping("/{accountId}/group")
    public ResponseEntity<Map<String,Object>> disableGroup(
            @PathVariable String accountId
    ){
        Map<String,Object> response = new HashMap<>();

        try {
            accountService.disableGroupAccount(accountId);
            response.put("message","group disabled success");
            return new ResponseEntity<>(response, HttpStatus.ACCEPTED);
        }catch (Exception e){
            response.put("status", "failed");
            response.put("message", "Disabling Group failed: " + e.getMessage());
            return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //사용자의 그룹계좌 목록 조회
    @PostMapping("/group")
    public ResponseEntity<Map<String,Object>> MyGroupAccounts(
            @RequestBody GroupIdsRequestDto groupIdsRequestDto
            ){
        Map<String,Object> response = new HashMap<>();

        try {
            List<Long> groupIds = groupIdsRequestDto.getGroupIds();
            List<Account> groupAccountList = accountService.findGroupAccountByGroupIds(groupIds);
            log.info(String.valueOf(groupAccountList.get(0)));
            List<GroupAccountResponseDto> groupAccountResponseDtoList = new ArrayList<>();
            for(Account account : groupAccountList){
                GroupAccountResponseDto groupAccountResponseDto = GroupAccountResponseDto.builder()
                        .groupName(account.getGroupName())
                        .account(account.getAccountId())
                        .goal(account.getGoal())
                        .balance(account.getBalance())
                        .dues(account.getDues())
                        .duesDate(account.getDuesDate())
                        .startDate(account.getStartDate())
                        .member(groupAccountList.size())
                        .money(account.getMoney())
                        .build();

                groupAccountResponseDtoList.add(groupAccountResponseDto);
            }
            response.put("groupAccounts",groupAccountResponseDtoList);
            return new ResponseEntity<>(response, HttpStatus.ACCEPTED);
        }catch (Exception e){
            response.put("status", "failed");
            return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @GetMapping("/my/{userName}")
    public ResponseEntity<?> getAccounts(@PathVariable String userName){


        List<Account> allByUserName = accountService.findAllByUserName(userName);
        return new ResponseEntity<>(allByUserName,HttpStatus.OK);
    }
}
