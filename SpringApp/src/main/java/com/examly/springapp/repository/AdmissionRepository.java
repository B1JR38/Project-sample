package com.examly.springapp.repository;

import com.examly.springapp.model.AdmissionModel;
import com.examly.springapp.model.StudentModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AdmissionRepository extends JpaRepository<AdmissionModel, Integer> {
    @Query("SELECT a FROM AdmissionModel a WHERE a.studentId=?1")
    List<StudentModel> findByF(StudentModel studentId);
}