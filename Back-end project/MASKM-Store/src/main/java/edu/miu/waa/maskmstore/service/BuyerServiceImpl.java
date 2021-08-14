package edu.miu.waa.maskmstore.service;

import edu.miu.waa.maskmstore.domain.*;
import edu.miu.waa.maskmstore.domain.stock.Product;
import edu.miu.waa.maskmstore.dto.LineItemDTO;
import edu.miu.waa.maskmstore.dto.OrderDTO;
import edu.miu.waa.maskmstore.repository.*;
import edu.miu.waa.maskmstore.service.products.ProductsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.data.domain.Pageable;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import javax.mail.internet.MimeMessage;
import java.lang.module.Configuration;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class BuyerServiceImpl implements BuyerService{

    @Autowired
    BuyerRepository buyerRepository;
    @Autowired
    SellerRepository sellerRepository;
    @Autowired
    OrderRepository orderRepository;
    @Autowired
    OrderService orderService;
    @Autowired
    ProductsService productService;
    @Autowired
    AddressRepository addressRepository;
    @Autowired
    CreditCardRepository creditCardRepository;

    @Autowired
    private JavaMailSender mailSender;



    @Override
    public List<Order> getAllOrdersForBuyer(long id) {
        return buyerRepository.getAllOrdersByBuyerId(id);
    }

    @Override
    public Buyer getBuyerByUsername(String userName){
        return buyerRepository.findBuyerByUsername(userName);
    }

    @Override
    public void followSeller(long bId, long sId) {
        Buyer buyer=buyerRepository.findBuyerByBId(bId);
        Seller seller= sellerRepository.findSellerBySId(sId);
        List<Seller> sellersFollowed= buyerRepository.getSellerFollowedByBuyerId(bId);
        sellersFollowed.add(seller);
        buyer.setSellersFollowed(sellersFollowed);
        buyerRepository.save(buyer);

    }
    @Override
    public void unFollowSeller(long bId, long sId) {
        Buyer buyer=buyerRepository.findBuyerByBId(bId);
        Seller seller= sellerRepository.findSellerBySId(sId);
        List<Seller> sellersFollowed= buyerRepository.getSellerFollowedByBuyerId(bId);
        sellersFollowed.remove(seller);

        buyer.setSellersFollowed(sellersFollowed);
        buyerRepository.save(buyer);

    }

    @Override
    public List<Buyer> getAllBuyers(){
        return buyerRepository.findAllBuyers();
    }
    @Override
    public Buyer getBuyerBybId(long id) {
        return buyerRepository.findBuyerByBId(id);
    }

    @Override
    public Buyer getBuyerByEmail(String email)
    {
        return buyerRepository.findBuyerByEmail(email);

    }

    @Override
    public List<Buyer> getAllBuyerWithPagingAndSorting(Pageable pageable) {

        return buyerRepository.findAllBuyers();

    }

    @Override
    public List<Order> getAllOrderByBuyerId(long id){

        return buyerRepository.getAllOrdersByBuyerId(id);
    }

    @Override
    public void addBuyer(Buyer buyer) {
//        buyer.getUser().setR
        buyerRepository.save(buyer);
    }
    //Correct One
    @Override
    public void addOrder(OrderDTO orderDTO, String userName) {
        Buyer buyer=buyerRepository.findBuyerByUsername(userName);
        Order order=new Order();
        order.setBuyer(buyer);
       // List<LineItem> lineI=new ArrayList<LineItem>();
        order.setLineItems(new ArrayList<LineItem>());

        for (int i=0;i<orderDTO.getLineItemsDTO().size();i++)
        {
            LineItem li=new LineItem();
            LineItemDTO lDTO =new LineItemDTO();
            lDTO=orderDTO.getLineItemsDTO().get(i);
            Product product =  productService.getProductById(lDTO.getProductId()).get();
            li.setPrice(product.getPrice());
            li.setQuantity(lDTO.getQuantity());
            li.setProduct(product);
           // lineI.add(lineI);
            order.getLineItems().add(li);
        }
       // order.setLineItems(lineI);

        order.setPrice(order.getLineItems().stream().map(l->l.getPrice()*l.getQuantity()).reduce((double)0,(a,b)->a+b));
        orderRepository.save(order);
        buyer.setPoints( (long) (buyer.getPoints()+order.getPrice()));
        List<Order> orders = orderRepository.findAllOrdersByBuyerId(buyer.getBId());
        orders.add(order);
        buyer.setOrders(orders);
        buyerRepository.save(buyer);

        String orderText = order.toString();

        sendEmail(buyer.getUser().getEmail(),"MASKM STORE : Order Details",orderText);
}

    private void sendEmail(String emailUser,String subject,String text) {

        try {

            SimpleMailMessage email = new SimpleMailMessage();
            email.setTo(emailUser);
            email.setSubject(subject);
            email.setText(text);
            mailSender.send(email);
            System.out.println("Email is Sent");
        }catch (Exception ex)
        {System.out.println(ex.getMessage());}
    }


    @Override
    public boolean deleteOrder(String userName, long id) {
        Order order=orderService.getOrderById(id);
        if(order.getOrderStatus()!=OrderStatus.Shipped.getOrderStatus()||order.getOrderStatus()!=OrderStatus.Delivered.getOrderStatus())
        {
            Buyer buyer = buyerRepository.findBuyerByUsername(userName);
            buyer.getOrders().remove(order);
            buyerRepository.save(buyer);
            orderRepository.delete(order);
            return true;
        }
            return false;
    }

    @Override
    public List<LineItem> listOrderItems(String userName, long id) {
        Buyer buyer=buyerRepository.findBuyerByUsername(userName);
         return (List<LineItem>) buyer.
                getOrders()
                .stream()
                .map(o->{
                        if (o.getId()==id)
                    return o.getLineItems();
                        else return null;}
                );
    }

    @Override
    public Buyer editBuyer(String userName, Buyer buyer) {
        try {
            Buyer Old=buyerRepository.findBuyerByUsername(userName);
            return buyerRepository.save(buyer);
        }catch (IllegalArgumentException e){
            System.out.println("Error Edit Buyer:"+e);
            return null;
        }
    }

    @Override
    public Address addBillingAddress(String userName, Address address) {
        Buyer old=buyerRepository.findBuyerByUsername(userName);
        old.setBillingAddress(address);
        buyerRepository.save(old);
        return address;
    }

    @Override
    public Address editBillingAddress(long address_id, Address address) {
        Address oldAddress=addressRepository.findById(address_id).orElse(null);
        if (oldAddress!=null){
            if (address.getCountry()!=null)
                oldAddress.setCountry(address.getCountry());
            if (address.getCity()!=null)
                oldAddress.setCity(address.getCity());
            if (address.getState()!=null)
                oldAddress.setState(address.getState());
            if (address.getAddressLine()!=null)
                oldAddress.setAddressLine(address.getAddressLine());
            if (address.getZipCode()!=0)
                oldAddress.setZipCode(address.getZipCode());
            return addressRepository.save(oldAddress);
        }

        else return null;
    }

    @Override
    public Address addShippingAddress(String userName, Address address) {
        Buyer old=buyerRepository.findBuyerByUsername(userName);
        old.setShippingAddress(address);
        buyerRepository.save(old);
        return address;
    }

    @Override
    public Address editShippingAddress(long address_id, Address address) {
        Address oldAddress=addressRepository.findById(address_id).orElse(null);
        if (oldAddress!=null){
            if (address.getCountry()!=null)
                oldAddress.setCountry(address.getCountry());
            if (address.getCity()!=null)
                oldAddress.setCity(address.getCity());
            if (address.getState()!=null)
                oldAddress.setState(address.getState());
            if (address.getAddressLine()!=null)
                oldAddress.setAddressLine(address.getAddressLine());
            if (address.getZipCode()!=0)
                oldAddress.setZipCode(address.getZipCode());
            return addressRepository.save(oldAddress);
        }
        return null;

    }

    @Override
    public CreditCard addCreditCard(String userName, CreditCard creditCard) {
        Buyer old=buyerRepository.findBuyerByUsername(userName);
        old.setCreditCard(creditCard);
        buyerRepository.save(old);
        return creditCard;
    }

    @Override
    public CreditCard editCreditCard(long creditCard_id, CreditCard creditCard) {
        CreditCard oldCard=creditCardRepository.findById(creditCard_id).orElse(null);
        if (oldCard!=null){
            if (creditCard.getCardNumber()!=null)
                oldCard.setCardNumber(creditCard.getCardNumber());
            if (creditCard.getCvv()!=null)
                oldCard.setCvv(creditCard.getCvv());
            if (creditCard.getExpDate()!=null)
                oldCard.setExpDate(creditCard.getExpDate());
            creditCardRepository.save(oldCard);
        }
        return oldCard;
    }


    @Override
    public Order getOrderByBuyerUserNameOrderId(long id, String userName) {
        Buyer buyer=buyerRepository.findBuyerByUsername(userName);
        return orderRepository.findById(buyerRepository.getOrderByBuyerUserNameOrderId( id,  buyer.getBId())).get();
    }

    @Override
    public void save(Buyer buyer) {
        buyerRepository.save(buyer);
    }

    @Override
    public Order returnedOrder(String userName, long oId) {
        Buyer buyer =buyerRepository.findBuyerByUsername(userName);
        List<Long> lOID=buyer.getOrders().stream().map(o->o.getId()).collect(Collectors.toList());
        Order order=orderRepository.findOrderById(oId);
        if( lOID.contains(oId) && order.getOrderStatus()!=OrderStatus.Returned.getOrderStatus()) {

            order.setOrderStatus(OrderStatus.Returned.getOrderStatus());
            buyer.setPoints((int) (buyer.getPoints() - order.getPrice()));
            orderRepository.save(order);
            buyerRepository.save(buyer);
            return order;
        }
        return null;
    }


    @Override
    public Address getShippingAddressBysId(long id){
        return buyerRepository.findShippingAddress(id);

    }


}
