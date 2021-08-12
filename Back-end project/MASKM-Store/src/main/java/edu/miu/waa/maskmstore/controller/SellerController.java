package edu.miu.waa.maskmstore.controller;

import edu.miu.waa.maskmstore.domain.stock.Product;
import edu.miu.waa.maskmstore.service.products.ProductsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequestMapping("/seller")
public class SellerController {

    @Autowired
    ProductsService productsService;

    @GetMapping
    public String getFirst(){
        return "HelloWorld MASKM Seller Page";
    }


    @PostMapping("/{userName}")
    public Product addProduct(@RequestBody Product product, @RequestParam("cat") long cat_id, @PathVariable String userName){
        return productsService.addProduct(product,cat_id,userName);
    }
}
