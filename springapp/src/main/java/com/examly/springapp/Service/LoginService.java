package com.examly.springapp.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examly.springapp.Model.UserModel;
import com.examly.springapp.Repository.LoginRepository;

@Service
public class LoginService {

	
	@Autowired
	private LoginRepository loginRepo;
	
	public boolean checkLogin(UserModel user) {
		UserModel foundLogin=loginRepo.findByEmailAndPassword(user.getEmail(),user.getPassword());
		if(foundLogin!=null) {
			return true;
		}else {
			return false;
		}
	}	
}


