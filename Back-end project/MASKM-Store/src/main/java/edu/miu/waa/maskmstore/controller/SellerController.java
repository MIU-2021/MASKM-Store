package edu.miu.waa.maskmstore.controller;

import edu.miu.waa.maskmstore.domain.Buyer;
import edu.miu.waa.maskmstore.domain.Order;
import edu.miu.waa.maskmstore.domain.OrderStatus;
import edu.miu.waa.maskmstore.domain.Seller;
import edu.miu.waa.maskmstore.domain.stock.Product;
import edu.miu.waa.maskmstore.service.OrderService;
import edu.miu.waa.maskmstore.service.SellerService;
import edu.miu.waa.maskmstore.service.products.ProductsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/seller")
public class SellerController {

    @Autowired
    ProductsService productsService;
    @Autowired
    SellerService sellerService;
    @Autowired
    OrderService orderService;

    @PostMapping
    public void addSeller(@RequestBody Seller seller){

        sellerService.addSeller(seller);
    }
    @GetMapping
    public List<Seller> getSellers(){
        return sellerService.getAllSellers();
    }
    @GetMapping("/{userName}/orders")
    public List<Order> getSellerOrders(@PathVariable("userName") String userName){

        return sellerService.getOrdersBySellerBySId(sellerService.getSellerByUserName(userName).getSId());
    }

    @GetMapping("/{userName}/order/{id}")
    public Order getOrderByIdForSeller(@PathVariable("userName") String userName,@PathVariable("id") long oId){

        if( sellerService.getOrderIdsBySellerBySId(
            sellerService.getSellerByUserName(userName).getSId())
            .contains(oId)
        ) {

            Order order=orderService.getOrderById(oId);

            return order;
        }
        return null;
    }
    @PostMapping("/{userName}/order/cancel/{id}")
    public Order cancelSellerOrder(@PathVariable("userName") String userName,@PathVariable("id") long oId){
        return sellerService.cancelSellerOrder(userName,oId);
    }
    @PostMapping("/{userName}/order/shipped/{id}")
    public Order shipSellerOrder(@PathVariable("userName") String userName,@PathVariable("id") long oId){
     return sellerService.shipSellerOrder(userName,oId);
    }

    @PostMapping("/{userName}")
    public Product addProduct(@RequestBody Product product, @RequestParam("cat") long cat_id, @PathVariable String userName){
        return productsService.addProduct(product,cat_id,userName);
    }

}
