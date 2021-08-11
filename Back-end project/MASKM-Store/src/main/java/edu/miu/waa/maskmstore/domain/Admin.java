package edu.miu.waa.maskmstore.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import javax.persistence.*;
import javax.validation.constraints.Digits;
import java.util.List;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity

public class Admin {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    long aId;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="User_ID")
    User user;

}
