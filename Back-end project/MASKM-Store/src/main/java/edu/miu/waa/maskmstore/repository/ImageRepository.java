//package edu.miu.waa.maskmstore.repository;
//
//import edu.miu.waa.maskmstore.domain.Image;
//import org.springframework.data.jpa.repository.Query;
//import org.springframework.data.repository.CrudRepository;
//import org.springframework.data.repository.query.Param;
//import org.springframework.stereotype.Repository;
//
//import java.util.List;
//
//@Repository
//public interface ImageRepository extends CrudRepository<Image,Long> {
//    @Query(
//            "select p.images " +
//                    "from Product p " +
//                    "where p.id = :id "
//    )
//
//    public List<Image> getAllProductImages(@Param("id") long id);
//}
