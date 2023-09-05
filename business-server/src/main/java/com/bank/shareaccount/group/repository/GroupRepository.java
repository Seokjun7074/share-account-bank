package com.bank.shareaccount.group.repository;

import com.bank.shareaccount.group.entity.Group;
import com.bank.shareaccount.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface GroupRepository extends JpaRepository<Group, Long> {
    Optional<Group> findByName(String name);
}
