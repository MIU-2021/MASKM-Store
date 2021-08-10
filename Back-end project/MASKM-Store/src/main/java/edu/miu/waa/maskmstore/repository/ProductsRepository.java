package edu.miu.waa.maskmstore.repository;

import edu.miu.waa.maskmstore.domain.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductsRepository extends PagingAndSortingRepository<Product,Long> {

//    public Page<Product> getAllProductByRatting(Pageable pageable);

}
