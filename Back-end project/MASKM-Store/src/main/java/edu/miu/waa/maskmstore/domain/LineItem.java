package edu.miu.waa.maskmstore.domain;

import edu.miu.waa.maskmstore.domain.stock.Product;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@AllArgsConstructor

@Entity
public class LineItem {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)

    private int quantity;
    private double price;

    @OneToOne(cascade = CascadeType.ALL)
    private Product product;




    public LineItem() {
        this.quantity = 0;
        this.price = 0.0;
        this.product = new Product();
    }

    public double getPrice() {
//        return products.stream()
//                .map(product -> product.getPrice())
//                .reduce(0.0, Double::sum);
        return getQuantity()*product.getPrice();
    }

    public int getQuantity() {
        return this.quantity;
    }
}
