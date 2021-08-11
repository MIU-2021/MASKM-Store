package edu.miu.waa.maskmstore.repository;

import edu.miu.waa.maskmstore.domain.Review;
import edu.miu.waa.maskmstore.domain.stock.Product;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductsRepository extends PagingAndSortingRepository<Product,Long> {

    @Query(value = "select p.reviews from Product p where p.id=:productID")
    public List<Review> findAllReviewsForProduct(long productID);
}
