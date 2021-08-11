package edu.miu.waa.maskmstore.service;

import edu.miu.waa.maskmstore.domain.Address;



public interface SellerService {
    public Address getShippingAddressBysId(long id);
}
