package edu.miu.waa.maskmstore.repository;

import edu.miu.waa.maskmstore.domain.stock.ProductCategory;
import org.springframework.data.repository.CrudRepository;

public interface CategoryRepository extends CrudRepository<ProductCategory,Long> {


}
