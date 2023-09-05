package com.bank.shareaccount.group.repository;

import com.bank.shareaccount.group.entity.Access;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AccessRepository extends JpaRepository<Access,Long> {
}
