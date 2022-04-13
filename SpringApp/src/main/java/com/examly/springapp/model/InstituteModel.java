package com.examly.springapp.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class InstituteModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int instituteId;
    private String academyName;
    private String contactNumber;
    private String imageUrl;
    private String academyEmail;
    private String academyLocation;
    private String academyDescription;

    public InstituteModel() {
    }

    public InstituteModel(String academyName, String contactNumber, String imageUrl, String academyEmail, String academyLocation, String academyDescription) {
        this.academyName = academyName;
        this.contactNumber = contactNumber;
        this.imageUrl = imageUrl;
        this.academyEmail = academyEmail;
        this.academyLocation = academyLocation;
        this.academyDescription = academyDescription;
    }

    public int getInstituteId() {
        return instituteId;
    }

    public void setInstituteId(int instituteId) {
        this.instituteId = instituteId;
    }

    public String getAcademyName() {
        return academyName;
    }

    public void setAcademyName(String academyName) {
        this.academyName = academyName;
    }

    public String getContactNumber() {
        return contactNumber;
    }

    public void setContactNumber(String contactNumber) {
        this.contactNumber = contactNumber;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getAcademyEmail() {
        return academyEmail;
    }

    public void setAcademyEmail(String academyEmail) {
        this.academyEmail = academyEmail;
    }

    public String getAcademyLocation() {
        return academyLocation;
    }

    public void setAcademyLocation(String academyLocation) {
        this.academyLocation = academyLocation;
    }

    public String getAcademyDescription() {
        return academyDescription;
    }

    public void setAcademyDescription(String academyDescription) {
        this.academyDescription = academyDescription;
    }
}
