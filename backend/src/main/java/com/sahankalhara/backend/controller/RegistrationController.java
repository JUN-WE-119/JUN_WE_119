package com.sahankalhara.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.sahankalhara.backend.model.User;
import com.sahankalhara.backend.repository.UserRepository;

@RestController
public class RegistrationController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/api/register")
    public String registerUser(@RequestBody User user) {
        // You can add validation logic here

        // Save the user to the database
        userRepository.save(user);

        return "User registered successfully!";
    }
}

