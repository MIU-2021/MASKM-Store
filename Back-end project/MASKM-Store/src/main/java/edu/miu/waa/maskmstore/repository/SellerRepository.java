package edu.miu.waa.maskmstore.repository;

import edu.miu.waa.maskmstore.domain.Seller;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SellerRepository extends CrudRepository<Seller,Long> {
}
