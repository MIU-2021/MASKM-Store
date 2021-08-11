package edu.miu.waa.maskmstore.controller;


import edu.miu.waa.maskmstore.dto.AuthenticationRequest;
import edu.miu.waa.maskmstore.dto.AuthenticationResponse;
import edu.miu.waa.maskmstore.service.MyUserDetails.LoginUserDetailsService;
import edu.miu.waa.maskmstore.service.UserService;
import edu.miu.waa.maskmstore.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@RestController
public class AuthentificationController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private LoginUserDetailsService loginUserDetailsService;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private UserService userService;

    @PostMapping("/auth")
    public ResponseEntity<?> createAuthenticationToken(@RequestBody AuthenticationRequest authRequest) throws Exception{
        try{
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(authRequest.getUsername(),authRequest.getPassword())
            );
        }catch(BadCredentialsException e){

            throw new Exception("!! INCORRECT USER NAME OR PASSWORD",e);

        }
        final UserDetails userDetails = loginUserDetailsService.loadUserByUsername(authRequest.getUsername());
        final String jwt = jwtUtil.generateToken(userDetails);
        return ResponseEntity.ok(new AuthenticationResponse(jwt));
    }




}
