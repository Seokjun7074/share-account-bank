package com.forstuad.bankserver.repository;

import com.forstuad.bankserver.domain.CashFlow;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CashFlowRepository extends JpaRepository<CashFlow, Long> {

    @Query("SELECT c FROM CashFlow c WHERE c.sender = ?1 OR c.receiver = ?1")
    List<CashFlow> findCashFlowsByAccountId(String accountId);
}
