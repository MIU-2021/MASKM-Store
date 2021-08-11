package edu.miu.waa.maskmstore.service;

import edu.miu.waa.maskmstore.domain.Buyer;
import edu.miu.waa.maskmstore.repository.BuyerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BuyerServiceImpl implements BuyerService{

    @Autowired
    BuyerRepository buyerRepository;
    public Buyer getBuyerByUsername(String userName){
        return buyerRepository.findBuyerByUsername(userName);
    }
    public Buyer getBuyerByEmail(String email){
        return buyerRepository.findBuyerByEmail(email);
    }



}
