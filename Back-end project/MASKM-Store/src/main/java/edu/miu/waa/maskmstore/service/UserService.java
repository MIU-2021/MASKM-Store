package edu.miu.waa.maskmstore.service;

import edu.miu.waa.maskmstore.domain.User;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public interface UserService {
    public Optional<User> findUserByUserName(String userName);
}
