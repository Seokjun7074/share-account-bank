package com.forstuad.bankserver.util;

public interface AccountUtilService {
    //계좌번호 중복체크
    boolean isAccountIdDuplicated(String accountId);

    //계좌번호 생성
    String createAccountId();

}
