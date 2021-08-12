package edu.miu.waa.maskmstore.controller;

import edu.miu.waa.maskmstore.domain.Review;
import edu.miu.waa.maskmstore.domain.stock.Product;
import edu.miu.waa.maskmstore.domain.stock.ProductApprovedStatus;
import edu.miu.waa.maskmstore.domain.stock.ProductCategory;
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
//    @PostMapping("/cats/{id}")
//    public ProductSubCategory addSubCats(@PathVariable long id,@RequestBody ProductSubCategory productSubCategory){
//        return categoryService.addSubCategory(id,productSubCategory);
//    }
//    @PutMapping("/cats/{cat_id}/{subCat_id}")
//    public ProductSubCategory editSubCat(@RequestBody ProductSubCategory productSubCategory,@PathVariable long cat_id,@PathVariable long subCat_id){
//        return categoryService.editSubCategory(cat_id,subCat_id,productSubCategory);
//    }
//    @DeleteMapping("/cats/{cat_id}/{subCat_id}")
//    public String deleteSubCat(@PathVariable long cat_id,@PathVariable long subCat_id){
//        return categoryService.deleteSubCategory(cat_id,subCat_id);
//    }
}
