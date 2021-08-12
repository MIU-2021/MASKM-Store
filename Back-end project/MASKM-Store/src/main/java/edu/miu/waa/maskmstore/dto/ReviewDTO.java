package edu.miu.waa.maskmstore.dto;

import edu.miu.waa.maskmstore.domain.stock.Product;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class ReviewDTO {

    private double stars;
    private String comment;
    private Product product;
    private String status;
}
