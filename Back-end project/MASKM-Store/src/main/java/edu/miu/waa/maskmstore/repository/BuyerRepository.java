package edu.miu.waa.maskmstore.repository;

import edu.miu.waa.maskmstore.domain.Buyer;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BuyerRepository extends CrudRepository<Buyer,Long> {
}
