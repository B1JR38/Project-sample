package com.examly.springapp.model;

import javax.persistence.*;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class AdmissionModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int admissionId;

    @ManyToOne(cascade = CascadeType.MERGE)
    private StudentModel studentId;

    @ManyToOne(cascade = CascadeType.MERGE)
    private CourseModel courseId;

    @ManyToOne(cascade = CascadeType.MERGE)
    private InstituteModel instituteId;


    public AdmissionModel() {
    }

    public AdmissionModel(StudentModel studentId, CourseModel courseId, InstituteModel instituteId) {
        this.studentId = studentId;
        this.courseId = courseId;
        this.instituteId = instituteId;
    }

    public StudentModel getStudentId() {
        return studentId;
    }

    public void setStudentId(StudentModel studentId) {
        this.studentId = studentId;
    }

    public CourseModel getCourseId() {
        return courseId;
    }

    public void setCourseId(CourseModel courseId) {
        this.courseId = courseId;
    }

    public InstituteModel getInstituteId() {
        return instituteId;
    }

    public void setInstituteId(InstituteModel instituteId) {
        this.instituteId = instituteId;
    }

    public int getAdmissionId() {
        return admissionId;
    }

    public void setAdmissionId(int admissionId) {
        this.admissionId = admissionId;
    }
}