package com.examly.springapp.model;

import javax.persistence.*;
import java.util.Date;

@Entity
public class StudentModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int studentId;
    private String studentName;
    private Date studentDOB;
    private String address;
    private String mobile;
    private int SSLC;
    private int HSC;
    private int Diploma;
    private String eligibility;


    public StudentModel() {
    }

    public int getStudentId() {
        return studentId;
    }

    public void setStudentId(int studentId) {
        this.studentId = studentId;
    }

    public String getStudentName() {
        return studentName;
    }

    public void setStudentName(String studentName) {
        this.studentName = studentName;
    }

    public Date getStudentDOB() {
        return studentDOB;
    }

    public void setStudentDOB(Date studentDOB) {
        this.studentDOB = studentDOB;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public int getSSLC() {
        return SSLC;
    }

    public void setSSLC(int SSLC) {
        this.SSLC = SSLC;
    }

    public int getHSC() {
        return HSC;
    }

    public void setHSC(int HSC) {
        this.HSC = HSC;
    }

    public int getDiploma() {
        return Diploma;
    }

    public void setDiploma(int diploma) {
        Diploma = diploma;
    }

    public String getEligibility() {
        return eligibility;
    }

    public void setEligibility(String eligibility) {
        this.eligibility = eligibility;
    }

}
