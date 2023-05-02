package com.examly.springapp.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examly.springapp.Model.CourseModel;
import com.examly.springapp.Repository.CourseRepository;

@Service
public class CourseService {
	
	
	@Autowired
	private CourseRepository courseRepo;
	
	
	public List<CourseModel> getAll()
	{
		return courseRepo.findAll();
	}
		
	public CourseModel addCourse(CourseModel course) {
	 return courseRepo.save(course);
	}
	
	public CourseModel updateCourse(CourseModel course) {
		return courseRepo.save(course);
	}
	
	public boolean deleteCourse (int id) {
		courseRepo.deleteById(id);
		return true;
	}
	
}
