package com.examly.springapp.repository;

import com.examly.springapp.model.AdmissionModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdmissionRepository extends JpaRepository<AdmissionModel, Integer> {
}
