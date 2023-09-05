package com.bank.shareaccount.group.repository;

import com.bank.shareaccount.group.entity.Link;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface LinkRepository extends JpaRepository<Link,String> {
    Optional<Link> findByUrl(String url);
}
