package com.example.demo.controller;

import com.example.demo.model.User;
import com.example.demo.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@CrossOrigin
@RequestMapping("api/v1")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping(path = "/sign-up")
    public ResponseEntity addUser(@RequestBody User user) {
        userService.saveUser(user);
        return new ResponseEntity<>("User added succesfully!", HttpStatus.OK);
    }

    @PostMapping(path = "/login")
    public ResponseEntity<?> loginEmployee(@RequestBody User user) {
        User thisUser = userService.getUser(user);
        boolean loginResponse = userService.loginUser(user);
        if(loginResponse) {
            if(thisUser.isAdmin()) {
                return new ResponseEntity<>(new User(user.getUsername(),thisUser.isAdmin()),HttpStatus.OK);
            }
            return new ResponseEntity<>(new User(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>( HttpStatus.BAD_REQUEST);
        }
    }
}
