package edu.miu.waa.maskmstore.repository;

import edu.miu.waa.maskmstore.domain.Address;
import edu.miu.waa.maskmstore.domain.Buyer;
import edu.miu.waa.maskmstore.domain.Order;
import edu.miu.waa.maskmstore.domain.Seller;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BuyerRepository extends CrudRepository<Buyer,Long> {
    @Query("select b from Buyer b where b.user.username = :userName")
    public Buyer findBuyerByUsername(@Param("userName")String userName);
    @Query("select b from Buyer b where b.bId = :bId")
    public Buyer findBuyerByBId(@Param("bId")long id);

    @Query("select b from Buyer b")
    public List<Buyer> findAllBuyers();

    @Query( "select b from Buyer b where b.user.email = :email ")
    public Buyer findBuyerByEmail(@Param("email")String email);

    @Query("select b.orders from Buyer b where b.bId = :id ")
    public List<Order> getAllOrdersByBuyerId(@Param("id")long id);

    @Query("select b.sellersFollowed from Buyer b where b.bId = :id ")
    public List<Seller> getSellerFollowedByBuyerId(@Param("id")long id);


    @Query("select b.points from Buyer b where b.bId = :id ")
    public long getBuyerPoints(@Param("id") long id);

    @Query("select b.shippingAddress from Buyer b where b.bId=:id")
    public Address findShippingAddress(@Param("id") long id);





}
