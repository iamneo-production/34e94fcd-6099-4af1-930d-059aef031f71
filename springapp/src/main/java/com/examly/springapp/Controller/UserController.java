package com.examly.springapp.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.examly.springapp.Model.AdmissionModel;
import com.examly.springapp.Model.CourseModel;
import com.examly.springapp.Model.InstituteModel;
import com.examly.springapp.Model.UserModel;
import com.examly.springapp.Service.AdmissionModelService;
import com.examly.springapp.Service.CourseService;
import com.examly.springapp.Service.InstituteService;
import com.examly.springapp.Service.LoginService;
import com.examly.springapp.Service.UserService;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins="http://localhost:4200")
public class UserController {

	@Autowired
	private UserService userService;
	
	@Autowired
	private LoginService loginService;
	
	@Autowired
	private CourseService userCourse;
	
	@Autowired
	private InstituteService userInstitute;
	
	@Autowired
	private AdmissionModelService userAdmission;
	
	
	@PostMapping("/register")
	public UserModel adduser(@RequestBody UserModel user) throws Exception 
	{
		UserModel userobj=null;
		userobj=userService.adduser(user);
		return userobj;
	}
	
	@GetMapping("{email}")
	public UserModel getUserByEmail(@PathVariable String email) {
		return userService.getUserByEmail(email);
	}
	
	
	@PostMapping("/login")
	public boolean isUserPresent(@RequestBody UserModel user)
	{
		return loginService.checkLogin(user);
	}
	
	@GetMapping("/getCourse")
	public List<CourseModel> getAll(){
		return userCourse.getAll();
	}
	
	@GetMapping("/getInstitute")
	public List<InstituteModel> getAllInstitute(){
		return userInstitute.getAllInstitute();
	}
	

	@PostMapping("/addAdmission")
	public AdmissionModel addAdmission(@RequestBody AdmissionModel admission)
	{
		return userAdmission.addAdmission(admission);
	}
	
	@GetMapping("/getAdmission")
	public List<AdmissionModel> getAllAdmission(){
		return userAdmission.getAll();
	}
	
	@DeleteMapping("/deleteAdmission/{id}")
	public boolean deleteAdmission(@PathVariable("id") int id) {
		return userAdmission.deleteAdmission(id);
	}
	
}
