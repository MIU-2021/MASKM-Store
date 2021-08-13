package edu.miu.waa.maskmstore.service;

import edu.miu.waa.maskmstore.domain.LineItem;
import edu.miu.waa.maskmstore.domain.Order;
import edu.miu.waa.maskmstore.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderServiceImpl implements  OrderService{
    @Autowired
    OrderRepository orderRepository;

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
}
