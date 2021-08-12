package edu.miu.waa.maskmstore.service;

import edu.miu.waa.maskmstore.domain.Address;
import edu.miu.waa.maskmstore.domain.Buyer;
import edu.miu.waa.maskmstore.domain.Order;
import edu.miu.waa.maskmstore.domain.Seller;
import edu.miu.waa.maskmstore.repository.BuyerRepository;
import edu.miu.waa.maskmstore.repository.OrderRepository;
import edu.miu.waa.maskmstore.repository.SellerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BuyerServiceImpl implements BuyerService{

    @Autowired
    BuyerRepository buyerRepository;
    @Autowired
    SellerRepository sellerRepository;
    @Autowired
    OrderRepository orderRepository;


    @Override
    public List<Order> getAllOrdersForBuyer(long id) {
        return buyerRepository.getAllOrdersByBuyerId(id);
    }

    @Override
    public Buyer getBuyerByUsername(String userName){
        return buyerRepository.findBuyerByUsername(userName);
    }

    @Override
    public void followSeller(long bId, long sId) {
        Buyer buyer=buyerRepository.findBuyerByBId(bId);
        Seller seller= sellerRepository.findSellerBySId(sId);
        List<Seller> sellersFollowed= buyerRepository.getSellerFollowedByBuyerId(bId);
        sellersFollowed.add(seller);
        buyer.setSellersFollowed(sellersFollowed);
        buyerRepository.save(buyer);

    }
    @Override
    public void unFollowSeller(long bId, long sId) {
        Buyer buyer=buyerRepository.findBuyerByBId(bId);
        Seller seller= sellerRepository.findSellerBySId(sId);
        List<Seller> sellersFollowed= buyerRepository.getSellerFollowedByBuyerId(bId);
        sellersFollowed.remove(seller);

        buyer.setSellersFollowed(sellersFollowed);
        buyerRepository.save(buyer);

    }

    @Override
    public List<Buyer> getAllBuyers(){
        return buyerRepository.findAllBuyers();
    }
    @Override
    public Buyer getBuyerBybId(long id) {
        return buyerRepository.findBuyerByBId(id);
    }

    @Override
    public Buyer getBuyerByEmail(String email)
    {
        return buyerRepository.findBuyerByEmail(email);

    }

    @Override
    public List<Buyer> getAllBuyerWithPagingAndSorting(Pageable pageable) {

        return buyerRepository.findAllBuyers();

    }

    @Override
    public List<Order> getAllOrderByBuyerId(long id){
        return buyerRepository.getAllOrdersByBuyerId(id);
    }

    @Override
    public void addBuyer(Buyer buyer) {
        buyerRepository.save(buyer);
    }
    @Override
    public void addOrder(String userName, Order order) {
        Buyer buyer=buyerRepository.findBuyerByUsername(userName);

        List<Order> orders = orderRepository.findAllOrdersByBuyerId(buyer.getBId());
        orders.add(order);
        buyer.setOrders(orders);
}
    @Override
    public Address getShippingAddressBysId(long id){
        return buyerRepository.findShippingAddress(id);

    }
}
