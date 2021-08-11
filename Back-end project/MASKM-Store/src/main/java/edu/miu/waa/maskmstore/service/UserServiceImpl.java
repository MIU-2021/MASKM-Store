package edu.miu.waa.maskmstore.service;

import edu.miu.waa.maskmstore.domain.User;
import edu.miu.waa.maskmstore.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService{
    @Autowired
    UserRepository userRepository;
    @Override
    public User findUserByUserName(String userName){
        return userRepository.findUserByUsername(userName);

    }

}
