package edu.miu.waa.maskmstore.repository;

import edu.miu.waa.maskmstore.domain.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {
    public User findUserByUsername(String userName);
    public User findUserByEmail(String email);
}
