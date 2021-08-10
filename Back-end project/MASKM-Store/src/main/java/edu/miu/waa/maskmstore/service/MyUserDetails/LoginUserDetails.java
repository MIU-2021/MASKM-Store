package edu.miu.waa.maskmstore.service.MyUserDetails;

import edu.miu.waa.maskmstore.domain.Role;
import edu.miu.waa.maskmstore.domain.User;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.Set;
import java.util.stream.Collectors;

public class LoginUserDetails implements UserDetails {
    private String username;
    private String password;
    private boolean isActive;
    private Set<Role> roles;


    public LoginUserDetails(User user){

        username = user.getUsername();
        password = user.getPassword();
        roles = user.getRoles();

    }
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        //ROLE_+
        return roles.stream().map(role -> new SimpleGrantedAuthority(role.getRole())).collect(Collectors.toList());
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return username;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
