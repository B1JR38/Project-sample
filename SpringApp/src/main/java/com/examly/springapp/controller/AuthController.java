package com.examly.springapp.controller;

import com.examly.springapp.model.AdminModel;
import com.examly.springapp.model.LoginModel;
import com.examly.springapp.model.UserModel;
import com.examly.springapp.repository.AdminRepository;
import com.examly.springapp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

//@CrossOrigin(origins ="http://localhost:8081")
@RestController
@RequestMapping("")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private AdminRepository adminRepository;

    @PostMapping("/admin/signup")
    public Boolean saveAdmin(@RequestBody AdminModel adminModel){
        adminModel.setActive(false);
        adminModel.setUserRole("admin");
        adminRepository.save(adminModel);
        return true;
    }

    @PostMapping("/admin/login")
    public ResponseEntity<AdminModel> isAdminPresent(@RequestBody LoginModel loginModel){
        AdminModel adminModel = adminRepository.isAdminPresent(loginModel.getEmail(), loginModel.getPassword());
        adminModel.setActive(true);
        adminRepository.save(adminModel);
        return ResponseEntity.ok(adminModel);
    }

    @PostMapping("/user/signup")
    public Boolean saveUser(@RequestBody UserModel userModel){
        userModel.setActive(false);
        userModel.setUserRole("user");
        userRepository.save(userModel);
        return true;
    }

    @PostMapping("/user/login")
    public ResponseEntity<UserModel> isUserPresent(@RequestBody LoginModel loginModel){
        UserModel userModel = userRepository.isUserPresent(loginModel.getEmail(), loginModel.getPassword());
        userModel.setActive(true);
        userRepository.save(userModel);
        return ResponseEntity.ok(userModel);
    }

    @PostMapping("/user/logout")
    public String logoutUser(@RequestBody LoginModel loginModel){
        UserModel userModel = userRepository.findByEmail(loginModel.getEmail());
        userModel.setActive(false);
        userRepository.save(userModel);
        return "Logged out";
    }

    @PostMapping("/admin/logout")
    public String logoutAdmin(@RequestBody LoginModel loginModel){
        AdminModel adminModel = adminRepository.findByEmail(loginModel.getEmail());
        adminModel.setActive(false);
        adminRepository.save(adminModel);
        return "Logged out";
    }



}
