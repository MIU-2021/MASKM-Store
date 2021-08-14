package edu.miu.waa.maskmstore.service;

import edu.miu.waa.maskmstore.domain.Admin;
import edu.miu.waa.maskmstore.domain.Buyer;
import edu.miu.waa.maskmstore.domain.Seller;
import edu.miu.waa.maskmstore.domain.User;
import edu.miu.waa.maskmstore.dto.UserRegisterDTO;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public interface UserService {

    public Optional<User> findUserByUserName(String userName);

    boolean createUser(UserRegisterDTO userRegisterDTO);

    public void addSeller(Seller seller);
    public void addBuyer(Buyer buyer);
    public void addAdmin(Admin admin);

}
