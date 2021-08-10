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


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class User {

    @Id
    @GeneratedValue
    long id;
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


}
