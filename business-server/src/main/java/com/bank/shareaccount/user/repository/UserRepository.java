package com.bank.shareaccount.user.repository;

import com.bank.shareaccount.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findById(String id);

    Optional<User> findByAccount(String account);
}
