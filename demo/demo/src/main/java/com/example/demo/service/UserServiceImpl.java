package com.example.demo.service;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;


    @Bean
    private PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;

    }

    @Override
    public User saveUser(User user) {
        User newUser = new User(user.getUsername(), passwordEncoder().encode(user.getPassword()),user.isAdmin());
        return userRepository.save(newUser);
    }

    @Override
    public User getUser(User user) {
        return userRepository.findByUsername(user.getUsername());
    }

    @Override
    public boolean loginUser(User user) {
        User user1 = userRepository.findByUsername(user.getUsername());
        if(user1 != null) {
            String password = user.getPassword();
            String encodedPassword = user1.getPassword();
            return passwordEncoder().matches(password, encodedPassword);
        }
        return false;
    }
}
