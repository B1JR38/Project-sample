package com.example.university.controller.student;

import com.example.university.model.student.StudentModel;
import com.example.university.service.student.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("/admin")
public class StudentController {

    @Autowired
    private StudentService studentService;

    @PostMapping("/addStudent")
    public String addStudent(@RequestBody StudentModel studentModel){
        studentService.addStudent(studentModel);
        return "Student Added";
    }

    @GetMapping("/viewStudents")
    public List<StudentModel> viewStudents(){
        return studentService.viewStudents();
    }

    @GetMapping("/viewStudent/{studentId}")
    public StudentModel viewStudent(@PathVariable Integer studentId){
        return studentService.viewStudent(studentId);
    }

    @PutMapping("/editStudent/{studentId}")
    public ResponseEntity<StudentModel> editStudent(@RequestBody StudentModel studentModel, @PathVariable Integer studentId){
        try {
            StudentModel studentModel1=studentService.viewStudent(studentId);
            studentService.addStudent(studentModel);
            return new ResponseEntity<>(HttpStatus.OK);
        }catch (NoSuchElementException e){
            return new ResponseEntity<StudentModel>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/deleteStudent/{studentId}")
    public String deleteStudent(@PathVariable Integer studentId){
        studentService.deleteStudent(studentId);
        return "Student deleted with id "+studentId;
    }
}
