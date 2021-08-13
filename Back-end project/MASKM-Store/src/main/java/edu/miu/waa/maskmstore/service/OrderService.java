package edu.miu.waa.maskmstore.service;

import edu.miu.waa.maskmstore.domain.Buyer;
import edu.miu.waa.maskmstore.domain.LineItem;
import edu.miu.waa.maskmstore.domain.Order;
import edu.miu.waa.maskmstore.domain.OrderStatus;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;
import java.util.stream.Collectors;

public interface OrderService {
    public List<LineItem> getOrderLineItemsByOrderId(long id);
    public Order getOrderById(long id);

    public void save(Order order);
    public Order deliveredOrder(String userName,long oId);
}
