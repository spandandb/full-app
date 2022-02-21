package com.fullstack.stud.controller;

import java.util.List;

import com.fullstack.stud.entity.Student;
import com.fullstack.stud.service.StudentService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/student")
public class StudentController {

    @Autowired
    private StudentService studentService;

    @PostMapping("/add")
    public String add(@RequestBody Student student) {
        studentService.saveStudent(student);
        return "New student has been added successfully";
    }

    @GetMapping("view")
    public List<Student> getAllStudents() {
        return studentService.getAllStudents();
    }
}
