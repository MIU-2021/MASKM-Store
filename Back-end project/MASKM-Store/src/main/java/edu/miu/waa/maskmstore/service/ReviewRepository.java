package edu.miu.waa.maskmstore.service;

import edu.miu.waa.maskmstore.domain.Review;
import org.springframework.data.repository.CrudRepository;

public interface ReviewRepository extends CrudRepository<Review,Long> {
}
