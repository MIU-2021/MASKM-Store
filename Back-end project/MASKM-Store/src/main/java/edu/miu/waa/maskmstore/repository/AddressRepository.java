package edu.miu.waa.maskmstore.repository;

import edu.miu.waa.maskmstore.domain.Address;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AddressRepository extends CrudRepository<Address,Long> {
}
