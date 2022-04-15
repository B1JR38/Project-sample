package com.examly.springapp.repository;

import com.examly.springapp.model.AdminModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface AdminRepository extends JpaRepository<AdminModel, Integer> {

    @Query("SELECT a FROM AdminModel a WHERE a.email = ?1")
    AdminModel findByEmail(String email);
    @Query("SELECT a FROM AdminModel a WHERE a.email = ?1 and a.password =?2")
    AdminModel isAdminPresent(String email, String password);
}
