package edu.miu.waa.maskmstore.controller;

import edu.miu.waa.maskmstore.domain.Buyer;
import edu.miu.waa.maskmstore.domain.Order;
import edu.miu.waa.maskmstore.service.BuyerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/buyer")
public class BuyerController {

    @Autowired
    BuyerService buyerService;

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
    public Buyer getBuyerById(@PathVariable long id){
        return buyerService.getBuyerBybId(id);
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
