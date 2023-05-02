package com.examly.springapp.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examly.springapp.Model.AdmissionModel;
import com.examly.springapp.Repository.AdmissionRepository;

@Service
public class AdmissionModelService {
	
	@Autowired
	private AdmissionRepository admissionRepo;
	
	public AdmissionModel addAdmission(AdmissionModel admission)
	{
		return admissionRepo.save(admission);
	}
	
	public List<AdmissionModel> getAll(){
		return admissionRepo.findAll();
	}

	public boolean deleteAdmission(int id) {
		admissionRepo.deleteById(id);
		return true;
	}
}