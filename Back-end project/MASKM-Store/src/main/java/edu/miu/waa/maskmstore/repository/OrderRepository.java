package edu.miu.waa.maskmstore.repository;
import edu.miu.waa.maskmstore.domain.LineItem;
import edu.miu.waa.maskmstore.domain.Review;
import edu.miu.waa.maskmstore.domain.Order;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface OrderRepository extends PagingAndSortingRepository<Order,Long>{
    @Query(value = "select o.lineItems from Order o where o.id=:orderId")
    public List<LineItem> findAllLineItemsByOrderId(long orderId);

    @Query(value = "select b.orders from Buyer b where b.bId=:buyerId")
    public List<Order> findAllOrdersByBuyerId(long buyerId);

}
