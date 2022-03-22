package com.example.university.service.student;

import com.example.university.model.student.StudentModel;
import com.example.university.repository.student.StudentRepository;
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
