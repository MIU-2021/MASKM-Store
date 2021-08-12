package edu.miu.waa.maskmstore.filter;

import edu.miu.waa.maskmstore.service.MyUserDetails.LoginUserDetailsService;
import edu.miu.waa.maskmstore.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
public class JwtFilter extends OncePerRequestFilter {

    @Autowired
    private LoginUserDetailsService loginUserDetailsService;
    @Autowired
    private JwtUtil jwtUtil;

    @Override
    protected void doFilterInternal(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, FilterChain filterChain) throws ServletException, IOException {
    // if this header contains a token is will get something like (Bearer xxxxxxxxxxxxxxxxxxxxxxx)
        final String authorizationHeader = httpServletRequest.getHeader("Authorization");

        String username= null;
        String jwt = null;

        // this will get the username from the token
        if(authorizationHeader != null && authorizationHeader.startsWith("Bearer ")){
            jwt = authorizationHeader.substring(7); // eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ6YWluZWgiLCJpYXQiOjE2MTk4ODQ1OTUsImV4cCI6MTYxOTkwMjU5NX0.G6bw93BWFg-ZQ7cavEdVGk2IxF0XD0NWixN-mi2Ilvc
            username = jwtUtil.getUsernameFromToken(jwt);
        }
        // from the username, this will extract the userDetails
        if(username!=null && SecurityContextHolder.getContext().getAuthentication() == null){
            UserDetails userDetails = this.loginUserDetailsService.loadUserByUsername(username);
            // this will validate the username matches and token not expired
            if(jwtUtil.validateToken(jwt,userDetails)){
                UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken  = new UsernamePasswordAuthenticationToken(
                        userDetails,null,userDetails.getAuthorities());

                usernamePasswordAuthenticationToken.setDetails((new WebAuthenticationDetailsSource().buildDetails(httpServletRequest)));
                SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
            }
        }
        filterChain.doFilter(httpServletRequest,httpServletResponse);
        // After this we will tell the spring security configuration to not manage the session
        // This will work for each request and sets up the security context each time
    }
}
