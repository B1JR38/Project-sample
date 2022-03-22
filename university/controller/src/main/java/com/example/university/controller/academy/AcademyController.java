package com.example.university.controller.academy;

import com.example.university.model.academy.AcademyModel;
import com.example.university.service.academy.AcademyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("/admin")
public class AcademyController {

    @Autowired
    private AcademyService academyService;

    @PostMapping("/addInstitute")
    public String addInstitute(@RequestBody AcademyModel academyModel){
        academyService.addInstitute(academyModel);
        return "Institute added";
    }

    @PutMapping("/editInstitute/{instituteId}")
    public ResponseEntity<AcademyModel> editInstitute(@RequestBody AcademyModel academyModel, @PathVariable Integer instituteId){
        try {
            AcademyModel academyModel1 = academyService.viewInstitute(instituteId);
            academyService.addInstitute(academyModel);
            return new ResponseEntity<>(HttpStatus.OK);
        }catch (NoSuchElementException e){
            return new ResponseEntity<AcademyModel>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/deleteInstitute/{instituteId}")
    public String deleteInstitute(@PathVariable Integer instituteId){
        academyService.deleteInstitute(instituteId);
        return "Institute Deleted with id "+instituteId;
    }

    @GetMapping("/viewInstitutes")
    public List<AcademyModel> viewInstitutes(){
        return academyService.viewInstitutes();
    }

}
