package edu.miu.waa.maskmstore.service;

import edu.miu.waa.maskmstore.domain.Role;
import edu.miu.waa.maskmstore.domain.User;
import edu.miu.waa.maskmstore.dto.UserRegisterDTO;
import edu.miu.waa.maskmstore.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImpl implements UserService{
    @Autowired
    UserRepository userRepository;
    public Optional<User> findUserByUserName(String userName){
        return userRepository.findUserByUsername(userName);

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

        userRepository.save(user);
        return true;
    }

}
