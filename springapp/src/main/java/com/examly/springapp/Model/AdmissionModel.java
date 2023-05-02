package com.examly.springapp.Model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class AdmissionModel {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	int Id;
	String StudentName;
	String phoneNumber;
	String email;
	String courseName;
	String instituteName;
	String age;
	String gender;
	
	public AdmissionModel() {
		super();
		// TODO Auto-generated constructor stub
	}
	public AdmissionModel(int id, String studentName, String phoneNumber, String email, String courseName,
			String instituteName, String age, String gender) {
		super();
		Id = id;
		StudentName = studentName;
		this.phoneNumber = phoneNumber;
		this.email = email;
		this.courseName = courseName;
		this.instituteName = instituteName;
		this.age = age;
		this.gender = gender;
	}
	public int getId() {
		return Id;
	}
	public void setId(int id) {
		Id = id;
	}
	public String getStudentName() {
		return StudentName;
	}
	public void setStudentName(String studentName) {
		StudentName = studentName;
	}
	public String getPhoneNumber() {
		return phoneNumber;
	}
	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getCourseName() {
		return courseName;
	}
	public void setCourseName(String courseName) {
		this.courseName = courseName;
	}
	public String getInstituteName() {
		return instituteName;
	}
	public void setInstituteName(String instituteName) {
		this.instituteName = instituteName;
	}
	public String getAge() {
		return age;
	}
	public void setAge(String age) {
		this.age = age;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	@Override
	public String toString() {
		return "AdmissionModel [Id=" + Id + ", StudentName=" + StudentName + ", phoneNumber=" + phoneNumber + ", email="
				+ email + ", courseName=" + courseName + ", instituteName=" + instituteName + ", age=" + age
				+ ", gender=" + gender + "]";
	}
	

}
