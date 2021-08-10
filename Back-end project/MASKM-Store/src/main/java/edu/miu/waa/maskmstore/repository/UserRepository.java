package edu.miu.waa.maskmstore.repository;

import edu.miu.waa.maskmstore.domain.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {
}
