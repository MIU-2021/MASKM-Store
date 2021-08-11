package edu.miu.waa.maskmstore.controller;

import edu.miu.waa.maskmstore.domain.Review;
import edu.miu.waa.maskmstore.domain.stock.Product;
import edu.miu.waa.maskmstore.service.products.ProductsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin()
@RestController
@RequestMapping("/admin")
public class AdminController {

    @GetMapping
    public String getFirst(){
        return "HelloWorld MASKM Admin Page";
    }


    @Autowired
    ProductsService productsService;

    @GetMapping("/products/{id}")
    public Product approveProduct(@RequestParam("approved") boolean approved, @PathVariable long id){
        if (approved)
            return productsService.makeItApprovedOrRejected(id,"Approved");
        else
            return productsService.makeItApprovedOrRejected(id,"Rejected");
    }
    @GetMapping("/products/{id}/featured")
    public Product makeProductFeatured(@RequestParam("get") boolean featured, @PathVariable long id){
        return productsService.makeItFeatured(id,featured);
    }

    @GetMapping("/products/{product_id}/reviews/{review_id}")
    public Review approveReview(@PathVariable long product_id, @PathVariable long review_id,@RequestParam("approved") boolean approved){
        if (approved)
            return productsService.approveReview(product_id,review_id,"Approved");
        else
            return productsService.approveReview(product_id,review_id,"Rejected");

    }
}
