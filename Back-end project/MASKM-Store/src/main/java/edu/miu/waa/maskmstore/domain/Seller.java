package edu.miu.waa.maskmstore.domain;
import edu.miu.waa.maskmstore.domain.stock.Product;
import edu.miu.waa.maskmstore.domain.stock.Stock;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import javax.persistence.*;
import javax.validation.Valid;
import java.util.List;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Seller extends User{
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private long id;

    @Valid
    @OneToOne(cascade = CascadeType.ALL)
    @Fetch(FetchMode.JOIN)

    Address shippingAddress;
    @Valid
    @OneToOne(cascade = CascadeType.ALL)
    @Fetch(FetchMode.JOIN)
    Address billingAddress;
    @Valid
    @OneToMany(cascade = CascadeType.ALL)
    @Fetch(FetchMode.JOIN)
    @JoinTable
    List<Stock> stocks;
}
