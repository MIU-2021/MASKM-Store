package edu.miu.waa.maskmstore.service;

import edu.miu.waa.maskmstore.domain.Address;
import edu.miu.waa.maskmstore.domain.Order;
import edu.miu.waa.maskmstore.domain.OrderStatus;
import edu.miu.waa.maskmstore.domain.Seller;
import edu.miu.waa.maskmstore.domain.stock.Product;
import edu.miu.waa.maskmstore.domain.stock.ProductApprovedStatus;
import edu.miu.waa.maskmstore.repository.OrderRepository;
import edu.miu.waa.maskmstore.repository.SellerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class SellerServiceImpl implements  SellerService{
    @Autowired
    SellerRepository sellerRepository;
    @Autowired
    OrderRepository orderRepository;

    @Autowired
    OrderService orderService;

    @Autowired
    SellerService sellerService;

    public Seller getSellerByEmail(String email){
        return sellerRepository.findSellerByEmail(email);
    };


    @Override
    public Seller getSellerBySId(long id) {

        return sellerRepository.findSellerBySId(id);
    }
    @Override
    public Seller getSellerByUserName(String userName) {

        return sellerRepository.findSellerBySUserName(userName);
    }


    @Override
    public Seller makeItApprovedOrRejected(String userName, String status) {
        try {
            if (sellerRepository.findSellerByUsername(userName)!=null){
                Seller seller=sellerRepository.findSellerByUsername(userName);
                if (status.equals("Approved")){
                    seller.setStatus(ProductApprovedStatus.APPROVED.getProductStatus());
                    return sellerRepository.save(seller);

                }
                if (status.equals("Rejected")){
                    seller.setStatus(ProductApprovedStatus.REJECTED.getProductStatus());
                    return sellerRepository.save(seller);


                }
                return null;
            }
            return null;
        }catch (IllegalArgumentException e){
            System.out.println("STATUS ERROR: "+e.getMessage());
            return null;
        }
    }

    @Override
    public List<Order> getOrdersBySellerBySId(long sId) {

        List<Order> orders = sellerRepository.getOrdersBySellerBySId(sId).
                                stream().
                                map(o->orderRepository.findById(o).get())
                                .collect(Collectors.toList());
        return orders;


    }

    @Override
    public List<Long> getOrderIdsBySellerBySId(long sId) {
        return sellerRepository.getOrdersBySellerBySId(sId);
    }

    @Override
    public List<Seller> getAllSellers() {
        return (List<Seller>) sellerRepository.findAll();
    }

    @Override
    public void addSeller(Seller seller) {
        sellerRepository.save(seller);
    }

    @Override
    public void save(Seller seller) {
        sellerRepository.save(seller);
    }

    @Override
    public Order shipSellerOrder(String userName, long oId) {
        Seller seller =sellerRepository.findSellerByUsername(userName);
        List<Long> lOID= this.getOrderIdsBySellerBySId(seller.getSId());
        if( lOID.contains(oId)) {
            Order order=orderService.getOrderById(oId);
            order.setOrderStatus(OrderStatus.Shipped.getOrderStatus());
            orderService.save(order);
            sellerService.save(seller);
            return order;
        }
        return null;
    }

    @Override
    public Order cancelSellerOrder(String userName, long oId) {
        Seller seller =sellerService.getSellerByUserName(userName);
        List<Long> lOID= sellerService.getOrderIdsBySellerBySId(seller.getSId());
        if( lOID.contains(oId)) {
            Order order=orderService.getOrderById(oId);
            if (order.getOrderStatus()!=OrderStatus.Shipped.getOrderStatus())
                order.setOrderStatus(OrderStatus.Cancelled.getOrderStatus());
            orderService.save(order);
            return order;
        }
        return null;
    }

    @Override
    public Order getOrderByIdForSeller(String userName, long oId) {
        if( getOrderIdsBySellerBySId(
                getSellerByUserName(userName).getSId())
                .contains(oId)
        ) {
            Order order=orderService.getOrderById(oId);
            return order;
        }
        return null;

    }

}
