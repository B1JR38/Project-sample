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
    @Column(length = 25)
    private String username;
    @Column(length = 20)
    private String mobileNumber;
    @Column(length = 64)
    private String password;
    @Column(length = 64)
    private String confirmPassword;
    @Column(length = 20)
    private String userRole;
    @Column(length = 10)
    private Boolean active;

    public UserModel() {
    }

    public UserModel(String email, String username, String mobileNumber, String password, String confirmPassword, String userRole, Boolean active) {
        this.email = email;
        this.username = username;
        this.mobileNumber = mobileNumber;
        this.password = password;
        this.confirmPassword = confirmPassword;
        this.userRole = userRole;
        this.active = active;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getMobileNumber() {
        return mobileNumber;
    }

    public void setMobileNumber(String mobileNumber) {
        this.mobileNumber = mobileNumber;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getConfirmPassword() {
        return confirmPassword;
    }

    public void setConfirmPassword(String confirmPassword) {
        this.confirmPassword = confirmPassword;
    }

    public String getUserRole() {
        return userRole;
    }

    public void setUserRole(String userRole) {
        this.userRole = userRole;
    }

    public Boolean getActive() {
        return active;
    }

    public void setActive(Boolean active) {
        this.active = active;
    }
}
