package edu.miu.waa.maskmstore.dto;

//import edu.miu.waa.maskmstore.domain.Image;
import edu.miu.waa.maskmstore.domain.Seller;
import edu.miu.waa.maskmstore.domain.stock.ProductCategory;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import java.time.LocalDate;
import java.util.List;

@Getter
@Setter
public class ProductDTO {

    private boolean featured=false;

    private String title;

    private String description;

//    private List<Image> images;

    private double rating;
    private String status;
    private double price;
    private LocalDate createdOn;
    private ProductCategory productCategory;
    private Seller seller;


}
