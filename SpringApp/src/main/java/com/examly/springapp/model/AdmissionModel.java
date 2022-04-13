package com.examly.springapp.model;

import javax.persistence.*;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class AdmissionModel {

    @Id
    private int admissionId;

    @ManyToOne
    @JoinColumn(name = "student_model_student_id")
    private StudentModel studentModel;

    @ManyToOne
    @JoinColumn(name = "course_model_course_id")
    private CourseModel courseModel;

    @ManyToOne
    @JoinColumn(name = "institute_model_institute_id")
    private InstituteModel instituteModel;

    public AdmissionModel() {
    }

    public InstituteModel getInstituteModel() {
        return instituteModel;
    }

    public CourseModel getCourseModel() {
        return courseModel;
    }

    public StudentModel getStudentModel() {
        return studentModel;
    }


    public int getAdmissionId() {
        return admissionId;
    }

    public void setAdmissionId(int admissionId) {
        this.admissionId = admissionId;
    }
}
