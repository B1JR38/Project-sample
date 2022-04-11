package com.examly.springapp.model;

import javax.persistence.*;

@Entity
@Table(name = "users")
public class UserModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(unique = true, length = 45)
    private String email;
    @Column(length = 64)
    private String password;
    @Column(length = 25)
    private String userName;
    @Column(length = 20)
    private String mobileNumber;
    @Column(length = 20)
    private String userRole;
    @Column(length = 10)
    private Boolean active;

    public UserModel() {
    }

    public UserModel(String email, String password, String userName, String mobileNumber, String userRole, Boolean active) {
        this.email = email;
        this.password = password;
        this.userName = userName;
        this.mobileNumber = mobileNumber;
        this.userRole = userRole;
        this.active = active;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUserName() {
        return userName;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Boolean getActive() {
        return active;
    }

    public void setActive(Boolean active) {
        this.active = active;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getMobileNumber() {
        return mobileNumber;
    }

    public void setMobileNumber(String mobileNumber) {
        this.mobileNumber = mobileNumber;
    }

    public String getUserRole() {
        return userRole;
    }

    public void setUserRole(String userRole) {
        this.userRole = userRole;
    }
}
