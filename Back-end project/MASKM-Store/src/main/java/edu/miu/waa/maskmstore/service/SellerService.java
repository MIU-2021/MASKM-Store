package edu.miu.waa.maskmstore.service;

import edu.miu.waa.maskmstore.domain.Address;
import edu.miu.waa.maskmstore.domain.Order;
import edu.miu.waa.maskmstore.domain.Seller;
import edu.miu.waa.maskmstore.domain.stock.Product;
import org.springframework.data.repository.query.Param;

import java.util.List;


public interface SellerService {
    public Seller getSellerBySId(long id);
    public Seller getSellerByUserName(String userName);
    public List<Long> getOrderIdsBySellerBySId(long sId);

    public Seller makeItApprovedOrRejected(String userName, String status);
    public List<Order> getOrdersBySellerBySId( long sId);

    public List<Seller> getAllSellers();

    public void addSeller(Seller seller);

    public void save(Seller seller);

    public Order shipSellerOrder(String userName, long oId);
}
