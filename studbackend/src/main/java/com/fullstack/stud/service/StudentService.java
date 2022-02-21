package com.fullstack.stud.service;

import java.util.List;

import com.fullstack.stud.entity.Student;

public interface StudentService {
    public Student saveStudent(Student student);

    public List<Student> getAllStudents();
}
