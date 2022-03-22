package com.example.university.repository.academy;

import com.example.university.model.academy.AcademyModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AcademyRepository extends JpaRepository<AcademyModel, Integer> {
}
