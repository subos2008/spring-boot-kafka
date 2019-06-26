package com.example.demo;

import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EmployeesController {

	@CrossOrigin(origins = "*")
	@GetMapping("/employees")
	public List<Employee> getAllEmployees(){
		return Arrays.asList(new Employee(1l, "Martin Fowler", "Software Developer"));
	}
}
