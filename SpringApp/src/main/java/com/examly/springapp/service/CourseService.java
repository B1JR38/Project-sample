package com.examly.springapp.service;

import com.examly.springapp.model.CourseModel;
import com.examly.springapp.repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CourseService {

    @Autowired
    private CourseRepository courseRepository;


    public List<CourseModel> viewCourses(){
        return courseRepository.findAll();
    }

    public CourseModel viewCourse(Integer courseId){
        return courseRepository.findById(courseId).get();
    }

    public void addCourse(CourseModel courseModel){
        courseRepository.save(courseModel);
    }

    public void deleteCourse(Integer courseId){
        courseRepository.deleteById(courseId);
    }
}
