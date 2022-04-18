package com.examly.springapp.service;

import com.examly.springapp.model.InstituteModel;
import com.examly.springapp.repository.InstituteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InstituteService {

    @Autowired
    private InstituteRepository instituteRepository;

    public List<InstituteModel> viewInstitutes(){
       return instituteRepository.findAll();
    }

    public void addInstitute(InstituteModel instituteModel){
        instituteRepository.save(instituteModel);
    }

    public void deleteInstitute(Integer instituteId){
        instituteRepository.deleteById(instituteId);
    }

    public InstituteModel viewInstitute(Integer instituteId){
        return instituteRepository.findById(instituteId).get();
    }

}
