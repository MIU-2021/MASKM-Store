package edu.miu.waa.maskmstore.service;

import edu.miu.waa.maskmstore.domain.Address;
import edu.miu.waa.maskmstore.domain.Seller;
import edu.miu.waa.maskmstore.domain.stock.Product;

import java.util.List;
import java.util.Optional;


public interface SellerService {
    public Seller getSellerBySId(long id);
    public Seller getSellerByUserName(String userName);

    public Seller makeItApprovedOrRejected(String userName, String status);


    public List<Seller> getAllSellers();
}
