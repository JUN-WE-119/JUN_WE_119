package com.example.dulsha.Contoller;

import com.example.dulsha.dto.UserDTO;
import com.example.dulsha.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value ="api/v1/user")
@CrossOrigin
public class StudentController {
    @Autowired
    private UserService userService;
   @PostMapping("/saveUser")
    public UserDTO saveUser(@RequestBody UserDTO userDTO){
      return userService.saveUser(userDTO);
   }
   @GetMapping("/getUsers")
    public List<UserDTO> getUser(){
       return userService.getAllUsers();
   }
   @PutMapping("/updateUser")
    public UserDTO updateUser(@RequestBody UserDTO userDTO){
       return userService.updateUser(userDTO);
   }
   @DeleteMapping("/deletUser")
    public boolean deletUser(@RequestBody UserDTO userDTO){
       return userService.deleteUser(userDTO);
   }

}
