package com.example.controller;

import com.example.entity.User;
import com.example.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.swing.text.html.parser.Entity;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService service;

    @GetMapping("/{id}")
    public Optional<User> getUserById(@PathVariable("id") Long id){
        return service.getUserById(id);
    }

    @PostMapping("/")
    public User saveUser(@RequestBody User user){
        return service.saveUser(user);
    }

    @PostMapping("/login")
    public Long checkCredentials(@RequestBody User user){
        return service.checkCredentials(user);
    }
}
