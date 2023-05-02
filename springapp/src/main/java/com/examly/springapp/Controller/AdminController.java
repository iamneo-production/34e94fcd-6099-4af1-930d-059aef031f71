package com.examly.springapp.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.examly.springapp.Model.CourseModel;
import com.examly.springapp.Model.InstituteModel;
import com.examly.springapp.Service.CourseService;
import com.examly.springapp.Service.InstituteService;

@RestController
@RequestMapping("/admin")
@CrossOrigin(origins="http://localhost:4200")
public class AdminController {
	
	@Autowired
	private CourseService adminCourse;
	
	@Autowired
	private InstituteService adminInstitute;
	
//	CourseController
	
	@GetMapping("/getCourse")
	public List<CourseModel> getAll(){
		return adminCourse.getAll();
	}
	
	@PostMapping("/addCourse")
	public CourseModel addCourse(@RequestBody CourseModel course) {
		return adminCourse.addCourse(course);
	}
	
	@PutMapping("/updateCourse/{id}")
	public CourseModel updateCourse(@PathVariable("id") int id , @RequestBody CourseModel course) {
		course.setCourseId(id);
		return adminCourse.updateCourse(course);
	}
	
	@DeleteMapping("deleteCourse/{id}")
	public boolean deleteCourse(@PathVariable("id") int id)
	{
		return adminCourse.deleteCourse(id);
	}
	
	
//	     InstituteController
	
	@GetMapping("/getInstitute")
	public List<InstituteModel> getInstitute(){
		return adminInstitute.getAllInstitute();
	}
	
	@PostMapping("/addInstitute")
	public InstituteModel addInstitute(@RequestBody InstituteModel institute)
	{
		return adminInstitute.addInstitute(institute);
	}
	
	@PutMapping("/updateInstitute/{id}")
	public InstituteModel updateInstitute(@PathVariable("id")int id, @RequestBody InstituteModel institute)
	{
		institute.setInstituteId(id);
		return adminInstitute.updateInstitute(institute);
	}
	
	@DeleteMapping("/deleteInstitute/{id}")
	public boolean deleteInstitute(@PathVariable("id") int id) {
		adminInstitute.deleteInsitute(id);
		return true;
	}
	
}
