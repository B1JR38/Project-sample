package com.examly.springapp.service;

import com.examly.springapp.model.AdmissionModel;
import com.examly.springapp.model.StudentModel;
import com.examly.springapp.repository.AdmissionRepository;
import com.examly.springapp.repository.CourseRepository;
import com.examly.springapp.repository.InstituteRepository;
import com.examly.springapp.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdmissionService {

    @Autowired
    private AdmissionRepository admissionRepository;

    @Autowired
    private StudentRepository studentRepository;

    private AdmissionModel admissionModel;

    @Autowired
    private CourseRepository courseRepository;

    @Autowired
    private InstituteRepository instituteRepository;

//    public void addAdmission(StudentModel studentModel, Integer courseId, Integer instituteId){
//
//    }

    public AdmissionModel viewAdmission(Integer admissionId){
        return admissionRepository.findById(admissionId).get();
    }


}