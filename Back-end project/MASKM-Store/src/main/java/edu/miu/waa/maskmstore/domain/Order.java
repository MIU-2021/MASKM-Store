package edu.miu.waa.maskmstore.domain;

import edu.miu.waa.maskmstore.domain.stock.Product;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.Valid;
import java.util.Date;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

@Entity (name="ord")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    long id;
    private Date createdOn;

    private double price;

    @Valid
    @OneToMany(cascade = CascadeType.ALL)
    @JoinTable
    List<LineItem> lineItems;

    @ManyToOne
    private Buyer buyer;

}
