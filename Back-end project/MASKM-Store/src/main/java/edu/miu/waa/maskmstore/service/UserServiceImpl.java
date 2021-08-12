package edu.miu.waa.maskmstore.service;

import edu.miu.waa.maskmstore.domain.Buyer;
import edu.miu.waa.maskmstore.domain.Role;
import edu.miu.waa.maskmstore.domain.Seller;
import edu.miu.waa.maskmstore.domain.User;
import edu.miu.waa.maskmstore.dto.UserRegisterDTO;
import edu.miu.waa.maskmstore.repository.BuyerRepository;
import edu.miu.waa.maskmstore.repository.SellerRepository;
import edu.miu.waa.maskmstore.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImpl implements UserService{
    @Autowired
    UserRepository userRepository;

    @Autowired
    SellerRepository sellerRepository;
    @Autowired
    BuyerRepository buyerRepository;

    public Optional<User> findUserByUserName(String userName){
        return userRepository.findUserByUsername(userName);

    }

    @Override
    public void addSeller(Seller seller) {
        sellerRepository.save(seller);
    }
    @Override
    public void addBuyer(Buyer buyer) {
//        buyer.getUser().setR
        buyerRepository.save(buyer);
    }
    @Override
    public boolean createUser(UserRegisterDTO userRegisterDTO) {

        User user = new User();

        Role role = new Role();

        var findUSer = userRepository.findUserByUsername(userRegisterDTO.getUsername()).orElse(null);

        if(findUSer !=null){
            return false;
        }

        role.setRole(userRegisterDTO.getRole());


        user.setEmail(userRegisterDTO.getEmail());
        user.setFName(userRegisterDTO.getFirstName());
        user.setUsername(userRegisterDTO.getUsername());
        user.setPassword(userRegisterDTO.getPassword());
        user.setLName(userRegisterDTO.getLastName());
        user.addRole(role);

        if (userRegisterDTO.getRole().equals("BUYER")){
            Buyer buyer=new Buyer();
            buyer.setUser(user);
            addBuyer(buyer);
        }else if(userRegisterDTO.getRole().equals("SELLER")){
            Seller seller=new Seller();
            seller.setUser(user);
            addSeller(seller);
        }
//        userRepository.save(user);
        return true;
    }

}
