package edu.miu.waa.maskmstore.service;

import edu.miu.waa.maskmstore.domain.Address;
import edu.miu.waa.maskmstore.domain.Buyer;


import edu.miu.waa.maskmstore.domain.Order;
import org.springframework.data.domain.Pageable;

import java.util.List;


public interface BuyerService {
    public List<Order> getAllOrdersForBuyer(long id);
    public Buyer getBuyerByUsername(String userName);
    public void followSeller(long bId, long sId);
    public void unFollowSeller(long bId, long sId);
    public Address getShippingAddressBysId(long id);
    public Buyer getBuyerBybId(long id);
    public Buyer getBuyerByEmail(String email);
    public List<Buyer> getAllBuyers();
    public List<Buyer> getAllBuyerWithPagingAndSorting(Pageable pageable);
    public List<Order> getAllOrderByBuyerId(long id);
    public void addBuyer(Buyer buyer);
    public void addOrder(String userName,  Order order);
    public Order getOrderByBuyerUserNameOrderId(long id, String userName);


    public void save(Buyer buyer);
}
