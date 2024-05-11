package com.sahankalhara.backend.repository;

// UserRepository.java

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sahankalhara.backend.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

}

