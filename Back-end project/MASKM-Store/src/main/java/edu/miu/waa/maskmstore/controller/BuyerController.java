package edu.miu.waa.maskmstore.controller;

import edu.miu.waa.maskmstore.domain.*;
import edu.miu.waa.maskmstore.dto.OrderDTO;
import edu.miu.waa.maskmstore.service.BuyerService;
import edu.miu.waa.maskmstore.service.OrderService;
import edu.miu.waa.maskmstore.service.SellerService;
import edu.miu.waa.maskmstore.service.products.ProductsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;


@CrossOrigin(origins = {"*"})
@RestController
@RequestMapping("/buyer")
public class BuyerController {

    @Autowired
    BuyerService buyerService;
    @Autowired
    SellerService sellerService;
    @Autowired
    OrderService orderService;

    @PostMapping
    public void addBuyer(@RequestBody Buyer buyer){

        buyerService.addBuyer(buyer);
    }

    @PutMapping("/profile/{userName}")
    public void ediBuyer(@RequestBody Buyer buyer,String userName){
        buyerService.editBuyer(userName,buyer);
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
    @PostMapping("/{userName}/order/delivered/{id}")
    public Order deliveredOrder(@PathVariable("userName") String userName,@PathVariable("id") long oId){
        return orderService.deliveredOrder(userName,oId);
    }

    @PostMapping("/{userName}/order/returned/{id}")
    public Order returnedOrder(@PathVariable("userName") String userName,@PathVariable("id") long oId){
       return  buyerService.returnedOrder(userName,oId);
    }

    @PostMapping("/{userName}/order")
    public void addOrder(@RequestBody OrderDTO orderDTO, @PathVariable String userName){

        buyerService.addOrder(orderDTO,userName);

    }

    @GetMapping("/{userName}/order/{id}")
    public Order getOrderByBuyerUserNameOrderId(@PathVariable long id, @PathVariable String userName){

       return buyerService.getOrderByBuyerUserNameOrderId(id, userName);
    }

    @GetMapping("/{userName}/orders")
    public List<Order> getAllOrdersForBuyer(@PathVariable String userName){
                return buyerService.getAllOrdersForBuyer(buyerService.getBuyerByUsername(userName).getBId());
    }

    @DeleteMapping("/{userName}/order/{id}")
    public boolean deleteOrder(@PathVariable("userName") String userName, @PathVariable("id") long id){
        return buyerService.deleteOrder(userName,id);
    }

    @GetMapping("/{userName}/order/{id}/listItems")
    public List<LineItem> listOrderItems(@PathVariable("userName") String userName, @PathVariable("id") long id){
        return buyerService.listOrderItems(userName,id);
    }


    @GetMapping("/profile/{userName}")
    public Buyer getBuyerByUserName(@PathVariable String userName){
        return buyerService.getBuyerByUsername(userName);
    }


    @PostMapping("/profile/{seller_UserName}/billing")
    public Address addBillingAddress(@PathVariable String seller_UserName,@RequestBody Address address){
        return buyerService.addBillingAddress(seller_UserName,address);
    }
    @PutMapping("/profile/{seller_UserName}/billing/{address_id}")
    public Address editBillingAddress(@PathVariable String seller_UserName, @RequestBody Address address, @PathVariable long address_id){
        return buyerService.editBillingAddress(address_id,address);
    }
    @PostMapping("/profile/{seller_UserName}/shipping")
    public Address addSippingAddress(@PathVariable String seller_UserName,@RequestBody Address address){
        return buyerService.addShippingAddress(seller_UserName,address);
    }
    @PutMapping("/profile/{seller_UserName}/shipping/{address_id}")
    public Address editSippingAddress(@PathVariable String seller_UserName, @RequestBody Address address, @PathVariable long address_id){
        return buyerService.editShippingAddress(address_id,address);
    }
    @PostMapping("/profile/{seller_UserName}/card")
    public CreditCard addCardAddress(@PathVariable String seller_UserName,@RequestBody CreditCard creditCard){
        return buyerService.addCreditCard(seller_UserName,creditCard);
    }
    @PutMapping("/profile/{seller_UserName}/card/{card_id}")
    public CreditCard editCardAddress(@PathVariable String seller_UserName, @RequestBody CreditCard creditCard, @PathVariable long card_id){
        return buyerService.editCreditCard(card_id,creditCard);
    }
}
