package edu.miu.waa.maskmstore.service;

import edu.miu.waa.maskmstore.domain.User;
import org.springframework.stereotype.Service;

@Service
public interface UserService {
    public User findUserByUserName(String userName);
}
