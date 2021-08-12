package edu.miu.waa.maskmstore.dto;


import edu.miu.waa.maskmstore.domain.Role;
import lombok.Getter;
import lombok.Setter;

import java.util.Set;

@Getter
@Setter
public class UserRegisterDTO {

    private String username;
    private String password;
    private String firstName;
    private String lastName;
    private String email;
    private String role;

}
