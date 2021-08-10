package edu.miu.waa.maskmstore.repository;

import edu.miu.waa.maskmstore.domain.Buyer;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BuyerRepository extends CrudRepository<Buyer,Long> {
    public Buyer findBuyerByUsername(String userName);
    public Buyer findBuyerByEmail(String email);


    @Query(
            "select b.points " +
                    "from Buyer b " +
                    "where b.id = :id "
    )
    public long getBuyerPoints(@Param("id") long id);



}
