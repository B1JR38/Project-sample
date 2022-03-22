package com.example.university.controller.course;

import com.example.university.model.course.CourseModel;
import com.example.university.service.course.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("/admin")
public class CourseController {

    @Autowired
    private CourseService courseService;

    @PostMapping("/addCourse")
    public String addCourse(@RequestBody CourseModel courseModel){
        courseService.addCourse(courseModel);
        return "Course Added";
    }

    @GetMapping("/viewCourses")
    public List<CourseModel> viewCourses(){
        return courseService.viewCourses();
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

}
