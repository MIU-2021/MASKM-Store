package edu.miu.waa.maskmstore.domain.stock;

import edu.miu.waa.maskmstore.domain.Seller;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Stock {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String title;
    private int quantity;

//    @ManyToOne
//    @JoinColumn(name="SELLER_ID")
//    @NotNull
//    private Seller seller;

//    @OneToOne
//    @JoinColumn(name = "PRODUCT_ID")
//    private Product product;
}
