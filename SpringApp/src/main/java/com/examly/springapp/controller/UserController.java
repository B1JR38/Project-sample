package com.examly.springapp.controller;

import com.examly.springapp.model.AdmissionModel;
import com.examly.springapp.model.StudentModel;
import com.examly.springapp.service.AdmissionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins ="http://localhost:8081")
@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private AdmissionService admissionService;
    private StudentModel studentModel;
    private Integer courseId;
    private Integer instituteId;

    @PostMapping("/addAdmission")
    public String addAdmission(@RequestBody AdmissionModel admissionModel){
        admissionService.addAdmission(studentModel, courseId, instituteId );
        return "Admission added";
    }

    @GetMapping("/viewAdmission/{admissionId}")
    public AdmissionModel viewAdmission(@PathVariable Integer admissionId){
        return admissionService.viewAdmission(admissionId);
    }

}
