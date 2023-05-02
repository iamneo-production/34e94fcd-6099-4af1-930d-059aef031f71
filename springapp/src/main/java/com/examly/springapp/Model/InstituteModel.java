package com.examly.springapp.Model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class InstituteModel {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int instituteId;
	private String instituteName;
	private String instituteLocation;
	private String phoneNumber;
	private String email;
	
	
	public InstituteModel() {
		super();
		// TODO Auto-generated constructor stub
	}


	public InstituteModel(int instituteId, String instituteName, String instituteLocation, String phoneNumber,
			String email) {
		super();
		this.instituteId = instituteId;
		this.instituteName = instituteName;
		this.instituteLocation = instituteLocation;
		this.phoneNumber = phoneNumber;
		this.email = email;
	}


	public int getInstituteId() {
		return instituteId;
	}


	public void setInstituteId(int instituteId) {
		this.instituteId = instituteId;
	}


	public String getInstituteName() {
		return instituteName;
	}


	public void setInstituteName(String instituteName) {
		this.instituteName = instituteName;
	}


	public String getInstituteLocation() {
		return instituteLocation;
	}


	public void setInstituteLocation(String instituteLocation) {
		this.instituteLocation = instituteLocation;
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


	@Override
	public String toString() {
		return "instituteModel [instituteId=" + instituteId + ", instituteName=" + instituteName
				+ ", instituteLocation=" + instituteLocation + ", phoneNumber=" + phoneNumber + ", email=" + email
				+ "]";
	}
}
