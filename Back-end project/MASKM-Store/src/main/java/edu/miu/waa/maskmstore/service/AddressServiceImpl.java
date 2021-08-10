package edu.miu.waa.maskmstore.service;

import edu.miu.waa.maskmstore.repository.AddressRepository;
import org.springframework.beans.factory.annotation.Autowired;

public class AddressServiceImpl implements AddressService{
    @Autowired
    AddressRepository addressRepository;
}

