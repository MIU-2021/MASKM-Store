package edu.miu.waa.maskmstore.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import javax.persistence.*;
import javax.validation.Valid;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;
import java.util.HashSet;
import java.util.List;
import java.util.Set;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class User {


    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    long uId;
    @NotEmpty
    @Size(min = 3, max = 50,message = "username size")
    String username;
    @NotEmpty
    @Size(min = 3, max = 15,message = "password size")
    String password;
    @NotEmpty
    @Size(min = 3, max = 50,message = "fName size")
    String fName;
    @NotEmpty
    @Size(min = 3, max = 50,message = "lName size")
    String lName;
    @Email
    String email;


    @OneToOne(cascade = CascadeType.ALL)
    Phone phone;

    @ManyToMany(fetch = FetchType.EAGER,cascade = CascadeType.ALL)
    @JoinTable(name="USER_ROLES",joinColumns =
            {@JoinColumn(name="USER_ID")},inverseJoinColumns = {
            @JoinColumn(name="ROLE_ID")})
    /*@ToStringExclude
    @JsonIgnore*/
    private Set<Role> roles = new HashSet<>();

    private String image;

    public void addRole(Role role){
        roles.add(role);
    }







}
