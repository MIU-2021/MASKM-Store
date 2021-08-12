package edu.miu.waa.maskmstore.repository;

import edu.miu.waa.maskmstore.domain.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {
    public Optional<User> findUserByUsername(String userName);
    public User findUserByEmail(String email);
}
