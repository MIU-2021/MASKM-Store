package edu.miu.waa.maskmstore.dto;

import edu.miu.waa.maskmstore.domain.stock.Product;

import javax.persistence.*;

public class LineItemDTO {

    private int quantity;
    private double price;

    private Product product;
}
