package edu.miu.waa.maskmstore.repository;


import edu.miu.waa.maskmstore.domain.User;
import org.springframework.data.repository.CrudRepository;

import javax.persistence.NamedQueries;
import java.util.List;

public interface UserRepository extends CrudRepository <User, Long> {
    //@Query(value = "select u from User u where u.posts.size>1")
    //public List<User> getUsersGTOnePost();

}