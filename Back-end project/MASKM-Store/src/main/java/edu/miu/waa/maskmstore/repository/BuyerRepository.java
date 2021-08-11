package edu.miu.waa.maskmstore.repository;

import edu.miu.waa.maskmstore.domain.Buyer;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BuyerRepository extends CrudRepository<Buyer,Long> {
    @Query(
            "select b " +
                    "from Buyer b " +
                    "where b.user.username = :userName "
    )
    public Buyer findBuyerByUsername(String userName);
    @Query(
            "select b " +
                    "from Buyer b " +
                    "where b.user.email = :email "
    )
    public Buyer findBuyerByEmail(String email);


    @Query(
            "select b.points " +
                    "from Buyer b " +
                    "where b.bId = :id "
    )
    public long getBuyerPoints(@Param("id") long id);



}
