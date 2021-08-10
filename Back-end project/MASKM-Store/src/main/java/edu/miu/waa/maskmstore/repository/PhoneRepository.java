package edu.miu.waa.maskmstore.repository;

import edu.miu.waa.maskmstore.domain.Phone;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PhoneRepository extends CrudRepository<Phone,Long> {
}
