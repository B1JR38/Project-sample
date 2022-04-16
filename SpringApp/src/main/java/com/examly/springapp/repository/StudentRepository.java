package com.examly.springapp.repository;

import com.examly.springapp.model.StudentModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepository extends JpaRepository<StudentModel, Integer> {
    @Query("SELECT s FROM StudentModel s WHERE s.emailId = ?1")
    StudentModel findByEmail(String emailId);
}