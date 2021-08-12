package edu.miu.waa.maskmstore.service;

import edu.miu.waa.maskmstore.domain.Address;
import edu.miu.waa.maskmstore.domain.Seller;
import edu.miu.waa.maskmstore.domain.stock.Product;


public interface SellerService {
    public Seller getSellerBySId(long id);
    public Seller getSellerByUserName(String userName);

    public Seller makeItApprovedOrRejected(long id, String status);


}
