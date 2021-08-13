package edu.miu.waa.maskmstore.repository;

import edu.miu.waa.maskmstore.domain.Review;
import edu.miu.waa.maskmstore.domain.stock.Product;
import edu.miu.waa.maskmstore.domain.stock.ProductApprovedStatus;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ProductsRepository extends PagingAndSortingRepository<Product,Long> {

    @Query(value = "select prod from Product prod where prod.id=:id")
    public Optional<Product> getProductById(long id);

    @Query(value = "select p.reviews from Product p where p.id=:productID")
    public List<Review> findAllReviewsForProduct(long productID);

    @Query(value = "select prod from Product prod where prod.productCategory.id=:catId")
    public List<Product> findAllWithCategory(long catId);

    @Query(value = "select review from Review review where review.status=:status")
    public List<Review> getAllReviewsWithoutApproval(String status);
    @Query(value = "select li.id from maskm_db.line_item li where li.product_id=:pId",nativeQuery = true)
    public List<Long> deletableProduct(@Param("pId") long pId);
}
