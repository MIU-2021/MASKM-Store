package edu.miu.waa.maskmstore.service;

import edu.miu.waa.maskmstore.domain.Buyer;
import edu.miu.waa.maskmstore.domain.LineItem;
import edu.miu.waa.maskmstore.domain.Order;
import edu.miu.waa.maskmstore.domain.OrderStatus;
import edu.miu.waa.maskmstore.repository.BuyerRepository;
import edu.miu.waa.maskmstore.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class OrderServiceImpl implements  OrderService{
    @Autowired
    OrderRepository orderRepository;
    @Autowired
    BuyerRepository buyerRepository;


    @Override
    public List<LineItem> getOrderLineItemsByOrderId(long id) {
        return orderRepository.findAllLineItemsByOrderId(id);
    }

    @Override
    public Order getOrderById(long id) {
        return orderRepository.findOrderById(id);
    }

    @Override
    public void save(Order order) {
        orderRepository.save(order);
    }

    @Override
    public Order deliveredOrder(String userName, long oId) {

            Buyer buyer =buyerRepository.findBuyerByUsername(userName);
            List<Long> lOID= buyer.getOrders().stream().map(o->o.getId()).collect(Collectors.toList());
            if( lOID.contains(oId)) {
                Order order=orderRepository.findOrderById(oId);
                order.setOrderStatus(OrderStatus.Delivered);
                orderRepository.save(order);
                buyerRepository.save(buyer);
                return order;
            }
            return null;

    }
}
