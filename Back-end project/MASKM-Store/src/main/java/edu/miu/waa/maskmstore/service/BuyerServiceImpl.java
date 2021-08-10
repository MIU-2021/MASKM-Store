package edu.miu.waa.maskmstore.service;

import edu.miu.waa.maskmstore.repository.BuyerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BuyerServiceImpl implements BuyerService{
    @Autowired
    BuyerRepository buyerRepository;
}
