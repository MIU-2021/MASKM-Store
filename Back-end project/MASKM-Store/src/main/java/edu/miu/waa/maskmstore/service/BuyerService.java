package edu.miu.waa.maskmstore.service;

import edu.miu.waa.maskmstore.domain.Buyer;



public interface BuyerService {

    public Buyer getBuyerByUsername(String userName);
    public Buyer getBuyerByEmail(String email);

}
