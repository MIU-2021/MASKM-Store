package edu.miu.waa.maskmstore.domain;

import edu.miu.waa.maskmstore.domain.stock.Product;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.Valid;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

@Entity
public class LineItem {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    long id;

    private int quantity;
    private double price;

    //@OneToOne(cascade = CascadeType.ALL)
    @Valid
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "product_id")
    private Product product;

    @Override
    public String toString() {
        return "quantity : " + quantity +
                "\n\t price : " + price +
                "\n\t product : " + product;
    }
}
