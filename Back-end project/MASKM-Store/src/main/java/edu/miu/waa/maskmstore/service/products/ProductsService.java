package edu.miu.waa.maskmstore.service.products;

import edu.miu.waa.maskmstore.domain.Review;
import edu.miu.waa.maskmstore.domain.stock.Product;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;

public interface ProductsService {

    public Product addProduct(Product product,long cat_id,String userName);
    public Product addProductWithoutSeller(Product product, long cat_id);
    public Optional<Product> getProductById(long id);
    public List<Product> getAllProducts(Pageable pageable);
    public List<Product> getAllProductsForOneSeller(Pageable pageable,String SellerUserName);
    public boolean isExistById(long id);
    public String deleteById(long id);
    public Product editProduct(long id,Product product);
    public Product makeItApprovedOrRejected(long id,String status);
    public Product makeItFeatured(long id,boolean featured);
    public boolean deleteProduct(long product_id,String seller_userName);

    public Product addReviewToProduct(long id, Review review);
    public List<Review> getAllReviewsForProduct(long id);

    public List<Product> getAllProductWithPagingAndSorting(Pageable pageable);


    public Review approveReview(long product_id, long review_id, String approved);

    public List<Product> getAllProductsWithCat(Pageable pageable,long cat_ID);

    public List<Review> getAllReviewsWithoutApproval();
}
