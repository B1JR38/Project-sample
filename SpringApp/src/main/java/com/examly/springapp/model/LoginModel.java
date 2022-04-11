package com.examly.springapp.model;

import javax.persistence.Column;
import javax.persistence.Table;

@Table(name = "users")
public class LoginModel {

    @Column(unique = true, length = 45)
    private String email;
    @Column(length = 64)
    private String password;

    public LoginModel() {
    }

    public LoginModel(String email, String password) {
        this.email = email;
        this.password = password;
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
}
