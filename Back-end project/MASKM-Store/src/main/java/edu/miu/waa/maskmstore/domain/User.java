package edu.miu.waa.maskmstore.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import javax.persistence.*;
import javax.validation.Valid;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;
import java.util.List;
import java.util.Set;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class User {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    Long id;
    @NotEmpty
    @Size(min = 3, max = 15,message = "{name.size}")
    String username;
    @NotEmpty
    @Size(min = 3, max = 15,message = "{name.size}")
    String password;
    @NotEmpty
    @Size(min = 3, max = 15,message = "{name.size}")
    String fName;
    @NotEmpty
    @Size(min = 3, max = 15,message = "{name.size}")
    String lName;
    @Valid
    @OneToOne
    Phone phone;

    @Valid
    @OneToMany(cascade = CascadeType.ALL)
    @Fetch(FetchMode.JOIN)
    @JoinTable
    List<Address> addresses;

    @ManyToMany(fetch = FetchType.EAGER,cascade = CascadeType.ALL)
    @JoinTable(name="USER_ROLES",joinColumns =
            {@JoinColumn(name="USER_ID")},inverseJoinColumns = {
            @JoinColumn(name="ROLE_ID")})
    private Set<Role> roles;


}
