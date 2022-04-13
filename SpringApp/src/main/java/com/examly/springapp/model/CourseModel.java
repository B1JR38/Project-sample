package com.examly.springapp.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class CourseModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int courseId;
    private String courseName;
    private String studentNumber;
    private String courseduration;
    private String coursetiming;
    private String courseDescription;

    public CourseModel() {
    }

    public CourseModel(String courseName, String studentNumber, String courseduration, String coursetiming, String courseDescription) {
        this.courseName = courseName;
        this.studentNumber = studentNumber;
        this.courseduration = courseduration;
        this.coursetiming = coursetiming;
        this.courseDescription = courseDescription;
    }

    public int getCourseId() {
        return courseId;
    }

    public void setCourseId(int courseId) {
        this.courseId = courseId;
    }

    public String getCourseName() {
        return courseName;
    }

    public void setCourseName(String courseName) {
        this.courseName = courseName;
    }

    public String getStudentNumber() {
        return studentNumber;
    }

    public void setStudentNumber(String studentNumber) {
        this.studentNumber = studentNumber;
    }

    public String getCourseduration() {
        return courseduration;
    }

    public void setCourseduration(String courseduration) {
        this.courseduration = courseduration;
    }

    public String getCoursetiming() {
        return coursetiming;
    }

    public void setCoursetiming(String coursetiming) {
        this.coursetiming = coursetiming;
    }

    public String getCourseDescription() {
        return courseDescription;
    }

    public void setCourseDescription(String courseDescription) {
        this.courseDescription = courseDescription;
    }
}



