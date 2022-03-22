package com.example.university.service.course;

import com.example.university.model.course.CourseModel;
import com.example.university.repository.course.CourseRepository;
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
        return courseRepository.getById(courseId);
    }

    public void addCourse(CourseModel courseModel){
        courseRepository.save(courseModel);
    }

    public void deleteCourse(Integer courseId){
        courseRepository.deleteById(courseId);
    }
}
