package com.forstuad.bankserver.repository;

import com.forstuad.bankserver.domain.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface AccountRepository extends JpaRepository<Account,Long> {
    Account findByAccountId(String accountId);
    List<Account> findAllByUserName(String userName);
    List<Account> findByGroupIdIn(List<Long> groupIds);
}
