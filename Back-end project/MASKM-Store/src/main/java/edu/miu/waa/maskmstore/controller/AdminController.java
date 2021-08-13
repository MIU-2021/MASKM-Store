package edu.miu.waa.maskmstore.controller;

import edu.miu.waa.maskmstore.domain.Review;
import edu.miu.waa.maskmstore.domain.Seller;
import edu.miu.waa.maskmstore.domain.stock.Product;
import edu.miu.waa.maskmstore.domain.stock.ProductApprovedStatus;
import edu.miu.waa.maskmstore.domain.stock.ProductCategory;
import edu.miu.waa.maskmstore.service.SellerService;
import edu.miu.waa.maskmstore.service.categories.CategoryService;
import edu.miu.waa.maskmstore.service.products.ProductsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin")
@CrossOrigin(origins = {"*"})
public class AdminController {

    @GetMapping
    public String getFirst(){
        return "HelloWorld MASKM Admin Page";
    }


    @Autowired
    ProductsService productsService;

    @Autowired
    SellerService sellerService;

    @GetMapping("/products/{id}")
    public Product approveProduct(@RequestParam("approved") boolean approved, @PathVariable long id){
        if (approved)
            return productsService.makeItApprovedOrRejected(id,"Approved");
        else
            return productsService.makeItApprovedOrRejected(id,"Rejected");
    }
    @GetMapping("/seller/{userName}")
    public Seller approveSeller(@RequestParam("approved") boolean approved, @PathVariable String userName){
        if (approved)
            return sellerService.makeItApprovedOrRejected(userName,"Approved");
        else
            return sellerService.makeItApprovedOrRejected(userName,"Rejected");
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


    @GetMapping("/reviews")
    public List<Review> getAllReviewWithoutApproval(){
            return productsService.getAllReviewsWithoutApproval();

    }

    @Autowired
    CategoryService categoryService;
    @PostMapping("/cats")
    public ProductCategory addCats(@RequestBody ProductCategory productCategory){
        return categoryService.addCategory(productCategory);
    }
    @PutMapping("/cats/{id}")
    public ProductCategory editCat(@RequestBody ProductCategory productCategory,@PathVariable long id){
        return categoryService.editCategory(id,productCategory);
    }
    @DeleteMapping("/cats/{id}")
    public String deleteCat(@PathVariable long id){
        return categoryService.deleteCategory(id);
    }
    @GetMapping("/sellers")
    public List<Seller> getAllSellers(){
        return sellerService.getAllSellers();
    }


    @GetMapping("/sellers/{id}")
    public Seller getOneSeller(@PathVariable int id){

        return sellerService.getSellerBySId(id);
    }
    @DeleteMapping("products/{id}")
    public boolean deleteProduct(@PathVariable long id){
        return productsService.deleteProduct(id);
    }
}
