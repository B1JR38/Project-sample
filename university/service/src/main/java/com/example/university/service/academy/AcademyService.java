package com.example.university.service.academy;

import com.example.university.model.academy.AcademyModel;
import com.example.university.repository.academy.AcademyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AcademyService {

    @Autowired
    private AcademyRepository academyRepository;


    public List<AcademyModel> viewInstitutes(){
        return academyRepository.findAll();
    }

    public void addInstitute(AcademyModel academyModel){
        academyRepository.save(academyModel);
    }

    public void deleteInstitute(Integer instituteId){
        academyRepository.deleteById(instituteId);
    }

    public AcademyModel viewInstitute(Integer instituteId){
        return academyRepository.getById(instituteId);
    }


}
