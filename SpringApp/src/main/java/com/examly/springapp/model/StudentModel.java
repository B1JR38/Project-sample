package com.examly.springapp.model;

import javax.persistence.*;
import java.util.Date;

@Entity
public class StudentModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int studentId;
    private String firstName;
    private String lastName;
    private String gender;
    private String fatherName;
    private String phoneNumber;
    private String alternateNumber;
    private String motherName;
    private String emailId;
    private int age;
    private int marks;
    private String houseNo;
    private String streetName;
    private String areaName;
    private String pincode;
    private String state;
    private String nationality;
    private int courseid;
    private String coursename;


    public StudentModel() {
    }


    public StudentModel(String firstName, String lastName, String gender, String fatherName, String phoneNumber, String alternateNumber, String motherName, String emailId, int age, int marks, String houseNo, String streetName, String areaName, String pincode, String state, String nationality, String coursename, int courseid) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.fatherName = fatherName;
        this.phoneNumber = phoneNumber;
        this.alternateNumber = alternateNumber;
        this.motherName = motherName;
        this.emailId = emailId;
        this.age = age;
        this.marks = marks;
        this.houseNo = houseNo;
        this.streetName = streetName;
        this.areaName = areaName;
        this.pincode = pincode;
        this.state = state;
        this.nationality = nationality;
        this.courseid = courseid;
        this.coursename = coursename;
    }

    public String getCoursename() {
        return coursename;
    }

    public void setCoursename(String coursename) {
        this.coursename = coursename;
    }

    public int getCourseid() {
        return courseid;
    }

    public void setCourseid(int courseid) {
        this.courseid = courseid;
    }

    public int getStudentId() {
        return studentId;
    }

    public void setStudentId(int studentId) {
        this.studentId = studentId;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getFatherName() {
        return fatherName;
    }

    public void setFatherName(String fatherName) {
        this.fatherName = fatherName;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getAlternateNumber() {
        return alternateNumber;
    }

    public void setAlternateNumber(String alternateNumber) {
        this.alternateNumber = alternateNumber;
    }

    public String getMotherName() {
        return motherName;
    }

    public void setMotherName(String motherName) {
        this.motherName = motherName;
    }

    public String getEmailId() {
        return emailId;
    }

    public void setEmailId(String emailId) {
        this.emailId = emailId;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public int getMarks() {
        return marks;
    }

    public void setMarks(int marks) {
        this.marks = marks;
    }

    public String getHouseNo() {
        return houseNo;
    }

    public void setHouseNo(String houseNo) {
        this.houseNo = houseNo;
    }

    public String getStreetName() {
        return streetName;
    }

    public void setStreetName(String streetName) {
        this.streetName = streetName;
    }

    public String getAreaName() {
        return areaName;
    }

    public void setAreaName(String areaName) {
        this.areaName = areaName;
    }

    public String getPincode() {
        return pincode;
    }

    public void setPincode(String pincode) {
        this.pincode = pincode;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getNationality() {
        return nationality;
    }

    public void setNationality(String nationality) {
        this.nationality = nationality;
    }
}