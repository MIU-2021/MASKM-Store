package edu.miu.waa.maskmstore.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/seller")
public class SellerController {

    @GetMapping
    public String getFirst(){
        return "HelloWorld MASKM Seller Page";
    }
}
