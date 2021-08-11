package edu.miu.waa.maskmstore.repository;

import edu.miu.waa.maskmstore.domain.Address;
import edu.miu.waa.maskmstore.domain.Seller;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface SellerRepository extends CrudRepository<Seller, Long> {

    @Query("select s from Seller s where s.user.username=:userName")
    public Seller findSellerByUsername(String userName);

    @Query("select s from Seller s where s.user.email=:email")
    public Seller findSellerByEmail(@Param("email") String email);

    @Query("select s from Seller  s where s.sId=:sId")
    public Seller findSellerBySId(@Param("sId") long sId);

    @Query("select s.shippingAddress from Seller s where s.sId=:id")
    public Address findShippingAddress(@Param("id") long id);


}
