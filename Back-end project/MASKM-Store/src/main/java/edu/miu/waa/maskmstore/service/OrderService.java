package edu.miu.waa.maskmstore.service;

import edu.miu.waa.maskmstore.domain.LineItem;

import java.util.List;

public interface OrderService {
    public List<LineItem> getOrderLineItemsByOrderId(long id);
}
