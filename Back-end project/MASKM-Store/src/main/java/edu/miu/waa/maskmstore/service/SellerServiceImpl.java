package edu.miu.waa.maskmstore.service;

import edu.miu.waa.maskmstore.domain.Address;
import edu.miu.waa.maskmstore.domain.Seller;
import edu.miu.waa.maskmstore.repository.SellerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SellerServiceImpl implements  SellerService{
    @Autowired
    SellerRepository sellerRepository;

    public Seller getSellerByEmail(String email){
        return sellerRepository.findSellerByEmail(email);
    };


    @Override
    public Seller getSellerBySId(long id) {

        return sellerRepository.findSellerBySId(id);
    }
    @Override
    public Seller getSellerByUserName(String userName) {

        return sellerRepository.findSellerBySUserName(userName);
    }


}
