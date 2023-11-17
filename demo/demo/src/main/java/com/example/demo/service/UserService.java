package com.example.demo.service;

import com.example.demo.model.User;

public interface UserService {
    User saveUser(User user);

    User getUser(User user);

    boolean loginUser(User user);
}
