package edu.miu.waa.maskmstore.controller;

import edu.miu.waa.maskmstore.domain.Buyer;
import edu.miu.waa.maskmstore.domain.Order;
import edu.miu.waa.maskmstore.domain.Seller;
import edu.miu.waa.maskmstore.service.BuyerService;
import edu.miu.waa.maskmstore.service.SellerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin(origins = {"*"})
@RestController
@RequestMapping("/buyer")
public class BuyerController {

    @Autowired
    BuyerService buyerService;
    @Autowired
    SellerService sellerService;

    @PostMapping
    public void addBuyer(@RequestBody Buyer buyer){

        buyerService.addBuyer(buyer);
    }
    @GetMapping
    public List<Buyer> getAllBuyer(){
        return buyerService.getAllBuyers();
    }
    @GetMapping("/pagination")
    public List<Buyer> getAllBuyersPaging(@RequestParam("page")int pageNumber){
        return buyerService.getAllBuyerWithPagingAndSorting(PageRequest.of(pageNumber,1));
    }

    @GetMapping("/{id}")
    public Buyer getBuyerById(@PathVariable("id") long id){
        return buyerService.getBuyerBybId(id);
    }
    @GetMapping("/profile/{userName}")
    public Buyer getBuyerById(@PathVariable String userName){
        return buyerService.getBuyerByUsername(userName);
    }
    @GetMapping("/{userName}/follow")
    public List<Seller> getAllSellerFollowedByBuyer(@PathVariable String userName){
        return buyerService.getBuyerByUsername(userName).getSellersFollowed();
    }

    @PostMapping("/{bUserName}/follow/{sUserName}")
    public void followSeller(@PathVariable String bUserName, @PathVariable String sUserName){
         buyerService.followSeller(
                buyerService.getBuyerByUsername(bUserName).getBId(),
                sellerService.getSellerByUserName(sUserName).getSId()
        );
    }

        @PostMapping("/{bUserName}/unfollow/{sUserName}")
        public void unFollowSeller(@PathVariable String bUserName, @PathVariable String sUserName){
            buyerService.unFollowSeller(
                    buyerService.getBuyerByUsername(bUserName).getBId(),
                    sellerService.getSellerByUserName(sUserName).getSId()
            );
    }


    @PostMapping("/{userName}/order")
    public void addOrder(@RequestBody Order order, @PathVariable String userName){

           buyerService.addOrder(userName, order);
    }

    @GetMapping("/{userName}/order/{id}")
    public Order getOrderByBuyerUserNameOrderId(@PathVariable long id, @PathVariable String userName){

       return buyerService.getOrderByBuyerUserNameOrderId(id, userName);
    }

    @GetMapping("/{userName}/orders")
    public List<Order> getAllOrdersForBuyer(@PathVariable String userName){

        return buyerService.getAllOrdersForBuyer(buyerService.getBuyerByUsername(userName).getBId());
    }
    }
    @GetMapping("/profile/{userName}")
    public Buyer getBuyerById(@PathVariable String userName){
        return buyerService.getBuyerByUsername(userName);
    }


    @PostMapping("/{id}/Order")
    public void addOrder(@RequestBody Order order, @PathVariable long id){
           buyerService.addOrder(id, order);
    }

    @GetMapping("/{id}/orders")
    public List<Order> getAllOrdersForBuyer(@PathVariable long id){
        return buyerService.getAllOrdersForBuyer(id);
    }

}
