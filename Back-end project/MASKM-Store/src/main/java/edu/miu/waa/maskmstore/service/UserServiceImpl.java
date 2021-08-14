package edu.miu.waa.maskmstore.service;

import edu.miu.waa.maskmstore.domain.*;
import edu.miu.waa.maskmstore.dto.UserRegisterDTO;
import edu.miu.waa.maskmstore.repository.AdminRepository;
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
    @Autowired
    AdminRepository adminRepository;

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
    public void addAdmin(Admin admin) {
//        buyer.getUser().setR
        adminRepository.save(admin);
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
        }else if(userRegisterDTO.getRole().equals("ADMIN")){
            Admin admin=new Admin();
            admin.setUser(user);
            addAdmin(admin);
        }
       userRepository.save(user);
        return true;
    }

}
