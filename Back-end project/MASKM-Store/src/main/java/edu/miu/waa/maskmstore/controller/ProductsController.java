package edu.miu.waa.maskmstore.controller;

import edu.miu.waa.maskmstore.domain.Product;
import edu.miu.waa.maskmstore.service.products.ProductsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.Query;
import org.springframework.web.bind.annotation.*;

import javax.websocket.server.PathParam;
import java.util.List;

@RestController
@RequestMapping("/products")
public class ProductsController {

    @Autowired
    ProductsService productsService;

    @PostMapping
    public void addProduct(@RequestBody Product product){
        productsService.addProduct(product);
    }
    @GetMapping
    public List<Product> getAllProducts(){
        return productsService.getAllProducts(PageRequest.of(1,3,Sort.by("title").descending()));
    }
    @GetMapping("/pagination")
    public List<Product> getAllProductsPaging(@RequestParam("page")int pageNumber){
        return productsService.getAllProductWithPagingAndSorting(PageRequest.of(pageNumber,1));
    }
    @GetMapping("/ratting")
    public List<Product> getAllProductsPaging(){
        return productsService.getAllProductWithPagingAndSorting(PageRequest.of(1,3, Sort.by("ratting")));
    }
    @GetMapping("/{id}")
    public Product getProductById(@PathVariable long id){
        return productsService.getProductById(id).get();
    }
    @DeleteMapping("/{id}")
    public void deleteProduct(@PathVariable long id){
        productsService.deleteById(id);
    }

}
