package com.examly.springapp.Model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class UserModel {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int UserId;
	private String email;
	private String password;
	private String username;
	private String mobileNumber;
	private String role;

	
	public UserModel() {
		super();
		
	}

	public UserModel(int userId, String email, String password, String username, String mobileNumber, String role) {
		super();
		this.UserId = userId;
		this.email = email;
		this.password = password;
		this.username = username;
		this.mobileNumber = mobileNumber;
		this.role = role;
	}


	public int getUserId() {
		return UserId;
	}


	public void setUserId(int userId) {
		this.UserId = userId;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	public String getUsername() {
		return username;
	}


	public void setUsername(String username) {
		this.username = username;
	}


	public String getMobileNumber() {
		return mobileNumber;
	}


	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}


	public String getRole() {
		return role;
	}


	public void setRole(String role) {
		this.role = role;
	}


	@Override
	public String toString() {
		return "UserModel [UserId=" + UserId + ", email=" + email + ", password=" + password + ", username=" + username
				+ ", mobileNumber=" + mobileNumber + ", role=" + role + "]";
	}

}
