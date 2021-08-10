package edu.miu.waa.maskmstore.domain.stock;

import edu.miu.waa.maskmstore.domain.Image;
import edu.miu.waa.maskmstore.domain.ProductApprovedStatus;
import edu.miu.waa.maskmstore.domain.ProductCategory;
import edu.miu.waa.maskmstore.domain.Review;
import lombok.*;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import javax.validation.constraints.Digits;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.util.Date;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private boolean featured=false;

    @NotBlank
    @NotEmpty
    private String title;

    @NotBlank
    @NotEmpty
    private String description;

//    @NotBlank
//    @NotEmpty
    @OneToMany
    @JoinColumn(name = "image_id")
    private List<Image> images;


    private int rating=0;
    private String status= ProductApprovedStatus.PENDING.getProductStatus();

    @OneToMany(cascade = CascadeType.ALL)
    @Fetch(FetchMode.JOIN)
    @JoinTable
    private List<Review> reviews;


    @NotNull
    @Digits(fraction = 2,message = "Price Not Valid", integer = 5)
    private double price=0;

    @OneToOne
    private ProductCategory productCategory;

    @DateTimeFormat
    private Date addedOn;

    @OneToOne(mappedBy = "product")
    private Stock stock;








}
