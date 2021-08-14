package edu.miu.waa.maskmstore.dto;

import edu.miu.waa.maskmstore.domain.stock.Product;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
public class LineItemDTO {

    private int quantity;
    private double price;

    private long productId;
}
