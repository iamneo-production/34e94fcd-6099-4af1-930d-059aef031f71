package com.examly.springapp.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examly.springapp.Model.InstituteModel;
import com.examly.springapp.Repository.InstituteRepository;

@Service
public class InstituteService {
	
	@Autowired
	private InstituteRepository instituteRepo;
	
	
	public List<InstituteModel> getAllInstitute(){
		return instituteRepo.findAll();
	}
	
	public InstituteModel addInstitute(InstituteModel institute) {
		return instituteRepo.save(institute);
	}
	
	public InstituteModel updateInstitute(InstituteModel institute)
	{
		return instituteRepo.save(institute);
	}
	
	public boolean deleteInsitute(int id)
	{
		instituteRepo.deleteById(id);
		return true;
	}

}
