package edu.miu.waa.maskmstore.service;

import edu.miu.waa.maskmstore.repository.PhoneRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PhoneServiceImpl implements PhoneService{
    @Autowired
    PhoneRepository phoneRepository;
}
