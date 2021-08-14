package edu.miu.waa.maskmstore.controller;

import edu.miu.waa.maskmstore.domain.Review;
import edu.miu.waa.maskmstore.domain.Seller;
import edu.miu.waa.maskmstore.domain.stock.Product;
import edu.miu.waa.maskmstore.service.products.ProductsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/products")
@CrossOrigin("*")
public class ProductsController {

    @Autowired
    ProductsService productsService;


    @PostMapping
    public Product addProduct(@RequestBody Product product,@RequestParam("cat")long cat_id){
        return productsService.addProductWithoutSeller(product,cat_id);
    }

    @GetMapping()
    public List<Product> getAllProductsPaging(@RequestParam(required = false, name = "page") String page, @RequestParam(required = false, name = "limit") String limit, @RequestParam(required = false, name = "cat") String cat_id,@RequestParam(required = false, name = "userName") String sellerUserName){
        if (page!=null&&limit!=null){
            if (cat_id!=null)
                return productsService.getAllProductsWithCat(PageRequest.of(Integer.parseInt(page)-1,Integer.parseInt(limit)),Integer.parseInt(cat_id));
            else if (sellerUserName != null)
                return productsService.getAllProductsForOneSeller(PageRequest.of(Integer.parseInt(page)-1
                        ,Integer.parseInt(limit))
                        ,sellerUserName);
            else
            return productsService.getAllProductWithPagingAndSorting(PageRequest.of(Integer.parseInt(page)-1,Integer.parseInt(limit)));

        }
        else if (sellerUserName!=null)
            return productsService.getAllProductsForOneSeller(Pageable.unpaged(),sellerUserName);
        else if (cat_id!=null)
            return productsService.getAllProductsWithCat(Pageable.unpaged(),Integer.parseInt(cat_id));

        else
            return productsService.getAllProducts(Pageable.unpaged());
    }
//    @PutMapping("/delete/{id}")
//    public boolean deleteProductById(@PathVariable long id){
//        return productsService.deleteProduct(id);
//    }

    @GetMapping("/{id}")
    public Product getProductById(@PathVariable long id){
        return productsService.getProductById(id).orElse(null);
    }
    @GetMapping("/{product_id}/seller")
    public Seller getSellerByProduct(@PathVariable long product_id){
        return productsService.getProductById(product_id).get().getSeller();
    }

    @PostMapping("/{id}/reviews")
    public Product addReview(@RequestBody Review review,@PathVariable long id){
        return productsService.addReviewToProduct(id,review);
    }

    @GetMapping("/{id}/reviews")
    public List<Review> getAllReviewsForProduct(@PathVariable long id){
        return productsService.getAllReviewsForProduct(id);
    }

    @PutMapping("/{id}")
    public Product editProduct(@PathVariable long id,@RequestBody Product product){
        return productsService.editProduct(id,product);
    }

}
