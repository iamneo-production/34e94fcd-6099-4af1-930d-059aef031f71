package com.examly.springapp;

import org.springframework.http.MediaType;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(classes = SpringappApplication.class)
@AutoConfigureMockMvc
class SpringappApplicationTests {
	@Autowired
	private MockMvc mockMvc;

	// Register Testcase
	@Test
	void test_case1() throws Exception {
		String st = "{\"email\":\"demo@iamneo.ai\",\"password\": \"demo\",\"username\": \"demo\",\"mobileNumber\": \"8888999922\"}";
		mockMvc.perform(MockMvcRequestBuilders.post("/user/register")
				.contentType(MediaType.APPLICATION_JSON)
				.content(st)
				.accept(MediaType.APPLICATION_JSON))
				.andExpect(MockMvcResultMatchers.status().isOk())
				.andReturn();
	}

	// Login Testcase
	@Test
	void test_case2() throws Exception {
		String st = "{\"email\":\"demo@iamneo.ai\",\"password\": \"demo\"}";
		mockMvc.perform(MockMvcRequestBuilders.post("/user/login")
				.contentType(MediaType.APPLICATION_JSON)
				.content(st)
				.accept(MediaType.APPLICATION_JSON))
				.andExpect(MockMvcResultMatchers.status().isOk())
				.andReturn();
	}

	// addAdmission Testcase
	@Test
	void test_case3() throws Exception {
		String admission = "{\"studentName\":\"Demouser\",\"phoneNumber\": \"8888999922\",\"email\": \"demo@iamneo.ai\",\"courseName\": \"Java\",\"instituteName\": \"IAMNEO\",\"age\": 28,\"gender\": \"Male\"}";
		mockMvc.perform(MockMvcRequestBuilders.post("/user/addAdmission")
				.contentType(MediaType.APPLICATION_JSON)
				.content(admission)
				.accept(MediaType.APPLICATION_JSON))
				.andExpect(MockMvcResultMatchers.status().isOk())
				.andReturn();
	}

	// admin add course Testcase
	@Test
	void test_case4() throws Exception {
		String admission = "{\"CourseId\":\"01\",\"courseName\": \"Java\",\"courseDuration\": \"2months\",\"courseFees\": 10000}";
		mockMvc.perform(MockMvcRequestBuilders.post("/admin/addCourse")
				.contentType(MediaType.APPLICATION_JSON)
				.content(admission)
				.accept(MediaType.APPLICATION_JSON))
				.andExpect(MockMvcResultMatchers.status().isOk())
				.andReturn();
	}

	// admin/getCourse
	@Test
	void test_case5() throws Exception {
		mockMvc.perform(get("/admin/getCourse")
				.accept(MediaType.APPLICATION_JSON))
				.andDo(print())
				.andExpect(status().isOk())
				.andExpect(jsonPath("$").isNotEmpty())
				.andReturn();
	}

	// admin/deleteCourse/{id}
	@Test
	void test_case6() throws Exception {
		mockMvc.perform(MockMvcRequestBuilders.delete("/admin/deleteCourse/01")
				.accept(MediaType.APPLICATION_JSON))
				.andDo(print())
				.andExpect(status().isOk())
				.andReturn();
	}

	@Test
	void test_case7() throws Exception {
		String admission = "{\"instituteId\":\"01\",\"instituteName\": \"Iamneo\",\"instituteLocation\": \"Hopes\",\"phoneNumber\": \"8889653433\",\"email\": \"deno@iamneo.ai\"}";
		mockMvc.perform(MockMvcRequestBuilders.post("/admin/addInstitute")
				.contentType(MediaType.APPLICATION_JSON)
				.content(admission)
				.accept(MediaType.APPLICATION_JSON))
				.andExpect(MockMvcResultMatchers.status().isOk())
				.andReturn();
	}

	@Test
	void test_case8() throws Exception {
		mockMvc.perform(get("/admin/getInstitute")
				.accept(MediaType.APPLICATION_JSON))
				.andDo(print())
				.andExpect(status().isOk())
				.andExpect(jsonPath("$").isArray())
				.andReturn();
	}

}