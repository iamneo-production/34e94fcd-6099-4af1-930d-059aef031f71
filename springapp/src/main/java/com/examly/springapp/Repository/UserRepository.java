package com.examly.springapp.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.examly.springapp.Model.UserModel;

@Repository
public interface UserRepository extends JpaRepository<UserModel, Integer>{

	Object findByEmail(String email);

	UserModel getByEmail(String email);



}
