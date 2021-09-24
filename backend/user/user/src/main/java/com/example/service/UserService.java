package com.example.service;

import com.example.entity.User;
import com.example.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository repo;

    public Optional<User> getUserById(Long id) {
        return repo.findById(id);
    }

    public User saveUser(User user) {
        return repo.save(user);
    }

    public Long checkCredentials(User user) {
        String email=user.getEmail();
        String password=user.getPassword();
        Long ret;
        Optional<User> userData=repo.findByEmail(email);
        if(userData.isPresent()) {
            User us1=userData.get();
            if(us1.getPassword().equals(user.getPassword()))
                return us1.getId();
        }
        return null;
    }
}
