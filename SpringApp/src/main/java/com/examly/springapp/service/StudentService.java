package com.examly.springapp.service;

import com.examly.springapp.model.StudentModel;
import com.examly.springapp.repository.CourseRepository;
import com.examly.springapp.repository.InstituteRepository;
import com.examly.springapp.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {

    @Autowired
    private StudentRepository studentRepository;



    public List<StudentModel> viewStudents(){
        return studentRepository.findAll();
    }

    public StudentModel viewStudent(Integer studentId){
        return studentRepository.findById(studentId).get();
    }

    public void addStudent(StudentModel studentModel){
        studentRepository.save(studentModel);
    }

    public void deleteStudent(Integer studentId){
        studentRepository.deleteById(studentId);
    }


}
