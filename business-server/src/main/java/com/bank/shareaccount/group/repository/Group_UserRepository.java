package com.bank.shareaccount.group.repository;

import com.bank.shareaccount.group.entity.Group;
import com.bank.shareaccount.group.entity.Group_User;
import com.bank.shareaccount.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface Group_UserRepository extends JpaRepository<Group_User, Long> {

    Optional<Group_User> findGroup_UserByGroupAndUser(Group group, User user);
}
