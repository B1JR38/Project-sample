package com.examly.springapp.controller;

import com.examly.springapp.model.CourseModel;
import com.examly.springapp.model.InstituteModel;
import com.examly.springapp.model.StudentModel;
import com.examly.springapp.service.CourseService;
import com.examly.springapp.service.InstituteService;
import com.examly.springapp.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@CrossOrigin(origins ="*")
@RestController
@RequestMapping("/admin")
public class AdminController {

    @Autowired
    private CourseService courseService;

    @Autowired
    private InstituteService instituteService;

    @Autowired
    private StudentService studentService;



    @PostMapping("/addCourse")
    public String addCourse(@RequestBody CourseModel courseModel){
        courseService.addCourse(courseModel);
        return "Course Added";
    }

    @GetMapping("/viewCourses")
    public List<CourseModel> viewCourses(){
        return courseService.viewCourses();
    }

    @GetMapping("/viewCourse/{courseId}")
    public CourseModel viewCourse(@PathVariable Integer courseId){
        return courseService.viewCourse(courseId);
    }

    @PutMapping("/editCourse/{courseId}")
    public ResponseEntity<CourseModel> editCourse(@RequestBody CourseModel courseModel, @PathVariable Integer courseId){
        try {
            CourseModel courseModel1 = courseService.viewCourse(courseId);
            courseService.addCourse(courseModel);
            return new ResponseEntity<>(HttpStatus.OK);
        }catch (NoSuchElementException e){
            return new ResponseEntity<CourseModel>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/deleteCourse/{courseId}")
    public String deleteCourse(@PathVariable Integer courseId){
        courseService.deleteCourse(courseId);
        return "Course Deleted with id "+courseId;
    }

    @PostMapping("/addInstitute")
    public String addInstitute(@RequestBody InstituteModel instituteModel){
        instituteService.addInstitute(instituteModel);
        return "Institute Added";
    }

    @GetMapping("/viewInstitutes")
    public List<InstituteModel> viewInstitutes(){
        return instituteService.viewInstitutes();
    }

    @GetMapping("/viewInstitute/{instituteId}")
    public InstituteModel viewInstitute(@PathVariable Integer instituteId){
        return instituteService.viewInstitute(instituteId);
    }

    @PutMapping("/editInstitute/{instituteId}")
    public ResponseEntity<InstituteModel> editInstitute(@RequestBody InstituteModel instituteModel, @PathVariable Integer instituteId){
        try {
            InstituteModel instituteModel1 = instituteService.viewInstitute(instituteId);
            instituteService.addInstitute(instituteModel);
            return new ResponseEntity<>(HttpStatus.OK);
        }catch (NoSuchElementException e){
            return new ResponseEntity<InstituteModel>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/deleteInstitute/{instituteId}")
    public String deleteInstitute(@PathVariable Integer instituteId){
        instituteService.deleteInstitute(instituteId);
        return "Institute deleted with id "+instituteId;
    }

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
