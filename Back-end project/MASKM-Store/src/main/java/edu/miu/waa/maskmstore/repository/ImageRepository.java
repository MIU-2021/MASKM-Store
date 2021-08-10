package edu.miu.waa.maskmstore.repository;

import edu.miu.waa.maskmstore.domain.Image;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ImageRepository extends CrudRepository<Image,Long> {
}
