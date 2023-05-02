package com.examly.springapp.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examly.springapp.Model.UserModel;
import com.examly.springapp.Repository.UserRepository;

@Service
public class UserService {

	
	@Autowired
	private UserRepository userRepo;
	
	public UserModel adduser(UserModel user) throws Exception
	{
		
		if(userRepo!=null && userRepo.findByEmail(user.getEmail())!=null) {
			throw new Exception("Email already exists");
		
		}
		return userRepo.save(user);
	}
	
	public UserModel getUserByEmail(String email) {
		return userRepo.getByEmail(email);
	}
}