package edu.miu.waa.maskmstore.domain;


import edu.miu.waa.maskmstore.domain.stock.Product;
import java.util.ArrayList;
import java.util.List;

public class LineItem {

    private int quantity;
    private double price;

    private List<Product> products;




    public LineItem() {
        this.quantity = 0;
        this.price = 0.0;
        this.products = new ArrayList<>();
    }

    public double getPrice() {
//        return products.stream()
//                .map(product -> product.getPrice())
//                .reduce(0.0, Double::sum);
        return getQuantity()*products.get(0).getPrice();
    }

    public int getQuantity() {
        return products.size();
    }
}
