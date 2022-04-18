package com.examly.springapp.controller;

import com.examly.springapp.model.AdmissionModel;
import com.examly.springapp.model.StudentModel;
import com.examly.springapp.repository.AdmissionRepository;
import com.examly.springapp.repository.CourseRepository;
import com.examly.springapp.repository.InstituteRepository;
import com.examly.springapp.repository.StudentRepository;
import com.examly.springapp.service.AdmissionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

//@CrossOrigin(origins ="http://localhost:8081/")
@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private AdmissionRepository admissionRepository;

    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private CourseRepository courseRepository;

    @Autowired
    private InstituteRepository instituteRepository;

    @Autowired
    private AdmissionService admissionService;

    @PostMapping("/addAdmission")
    public ResponseEntity<Map<String , Boolean>> addAdmission(@PathVariable Integer studentId, @PathVariable Integer courseId, @PathVariable Integer instituteId, @RequestBody AdmissionModel admissionModel){
        admissionModel.setStudentId(studentRepository.getById(studentId));
        admissionModel.setCourseId(courseRepository.getById(courseId));
        admissionModel.setInstituteId(instituteRepository.getById(instituteId));
        admissionRepository.save(admissionModel);

        Map<String, Boolean> stringBooleanMap = new HashMap<>();
        stringBooleanMap.put("added", Boolean.TRUE);
        return ResponseEntity.ok(stringBooleanMap);
    }

    @GetMapping("/viewAdmission/{admissionId}")
    public AdmissionModel viewAdmission(@PathVariable Integer admissionId){
        return admissionService.viewAdmission(admissionId);
    }

    @DeleteMapping("/deleteAdmission/{admissionId}")
    public ResponseEntity<Map<String, Boolean>> deleteAdmission(@PathVariable Integer admissionId){
        Optional<AdmissionModel> admissionModelOptional = admissionRepository.findById(admissionId);
        AdmissionModel admissionModel = admissionModelOptional.get();
        admissionRepository.delete(admissionModel);
        Map<String, Boolean> stringBooleanMap = new HashMap<>();
        stringBooleanMap.put("Deleted", Boolean.TRUE);
        return ResponseEntity.ok(stringBooleanMap);
    }

    @PutMapping("/editAdmission/{admissionId}")
    public String editAdmission(@PathVariable Integer admissionId, @RequestBody AdmissionModel admissionModel){
        Optional<AdmissionModel> admissionModelOptional = admissionRepository.findById(admissionId);
        AdmissionModel admissionModel1 = admissionModelOptional.get();
        admissionModel1.setStudentId(admissionModel.getStudentId());
        admissionModel1.setInstituteId(admissionModel.getInstituteId());
        admissionModel1.setCourseId(admissionModel.getCourseId());
        admissionRepository.save(admissionModel1);
        return "true";
    }
}