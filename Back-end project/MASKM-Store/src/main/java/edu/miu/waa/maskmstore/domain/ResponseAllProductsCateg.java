package edu.miu.waa.maskmstore.domain;

import edu.miu.waa.maskmstore.domain.stock.Product;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class ResponseAllProductsCateg extends Response{

    private List<Product> products;
}
