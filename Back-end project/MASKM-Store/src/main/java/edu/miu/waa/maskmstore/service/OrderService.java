package edu.miu.waa.maskmstore.service;

import edu.miu.waa.maskmstore.domain.LineItem;
import edu.miu.waa.maskmstore.domain.Order;

import java.util.List;

public interface OrderService {
    public List<LineItem> getOrderLineItemsByOrderId(long id);
    public Order getOrderById(long id);

    public void save(Order order);
}
