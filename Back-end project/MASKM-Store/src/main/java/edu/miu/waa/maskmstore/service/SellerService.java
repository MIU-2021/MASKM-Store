package edu.miu.waa.maskmstore.service;

import edu.miu.waa.maskmstore.domain.Address;
import edu.miu.waa.maskmstore.domain.Seller;


public interface SellerService {
    public Address getShippingAddressBysId(long id);
    public Seller getSellerBySId(long id);
}
