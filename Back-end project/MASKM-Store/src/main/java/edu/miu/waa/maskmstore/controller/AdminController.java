package edu.miu.waa.maskmstore.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin()
@RestController
@RequestMapping("/admin")
public class AdminController {

    @GetMapping
    public String getFirst(){
        return "HelloWorld MASKM Admin Page";
    }


}
