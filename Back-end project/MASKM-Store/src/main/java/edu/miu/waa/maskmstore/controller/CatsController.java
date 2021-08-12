package edu.miu.waa.maskmstore.controller;

import edu.miu.waa.maskmstore.domain.stock.Product;
import edu.miu.waa.maskmstore.domain.stock.ProductCategory;
import edu.miu.waa.maskmstore.service.categories.CategoryService;
import edu.miu.waa.maskmstore.service.products.ProductsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cats")
@CrossOrigin("*")

public class CatsController {

    @Autowired
    CategoryService categoryService;

    @Autowired
    ProductsService poProductsService;

    @GetMapping()
    public List<ProductCategory> getAllCats(){
        return categoryService.getAllCats();
    }
    @GetMapping("{cat_id}")
    public ProductCategory getOneCat(@PathVariable long cat_id){
        return categoryService.getOneCat(cat_id).get();
    }
//    @PostMapping("/{cat_id}")
//    public Product addProduct(@RequestBody Product product, @PathVariable long cat_id){
//        return poProductsService.addProduct(product,cat_id,userName);
//    }
//    @GetMapping("/cats/{id}")
//    public List<ProductSubCategory> getAllSubCats(@PathVariable long id){
//        return categoryService.getAllSubCats(id);
//    }
}
