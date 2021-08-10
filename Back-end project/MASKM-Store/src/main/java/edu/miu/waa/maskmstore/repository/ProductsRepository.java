package edu.miu.waa.maskmstore.repository;

import edu.miu.waa.maskmstore.domain.stock.Product;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductsRepository extends PagingAndSortingRepository<Product,Long> {

//    public Page<Product> getAllProductByRatting(Pageable pageable);

}
