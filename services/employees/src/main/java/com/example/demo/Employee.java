package com.example.demo;

public class Employee {
	long id;
	String name;
	String title;
	
	public Employee(long id, String name, String title) {
		super();
		this.id = id;
		this.name = name;
		this.title = title;
	}

	public Employee() {
	}

	public long getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public String getTitle() {
		return title;
	}

	@Override
	public String toString() {
		return "Employee [id=" + id + ", name=" + name + ", title=" + title + "]";
	}
}
