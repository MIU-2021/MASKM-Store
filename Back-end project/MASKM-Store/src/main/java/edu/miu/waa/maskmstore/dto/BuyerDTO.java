package edu.miu.waa.maskmstore.dto;

import edu.miu.waa.maskmstore.domain.*;
import lombok.Getter;
import lombok.Setter;
import java.util.List;

@Getter
@Setter
public class BuyerDTO {

    long points;
    List<Order> orders;
    User user;
    Address shippingAddress;
    Address billingAddress;
    List<PaymentMethod> paymentMethods;
    List<Seller> sellersFollowed;


}
