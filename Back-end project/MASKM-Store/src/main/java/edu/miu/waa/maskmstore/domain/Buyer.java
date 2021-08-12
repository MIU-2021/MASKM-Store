package edu.miu.waa.maskmstore.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import javax.persistence.*;
import javax.validation.Valid;
import javax.validation.constraints.Digits;
import java.util.List;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity

public class Buyer {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private long bId;

    @Digits(integer = 6, fraction = 0)
    long points;


    @OneToMany(cascade = CascadeType.ALL)
    @JoinTable
    private List<Order> orders;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="User_ID")
    User user;

    @Valid
    @OneToMany(cascade = CascadeType.ALL)
    @JoinTable
    private List<PaymentMethod> paymentMethods;

    @Valid
    @OneToMany(cascade = CascadeType.ALL)
    @JoinTable
    private List<Seller> sellersFollowed;


}
