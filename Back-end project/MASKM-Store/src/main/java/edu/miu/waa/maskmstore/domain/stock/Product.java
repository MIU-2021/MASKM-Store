package edu.miu.waa.maskmstore.domain.stock;

import com.fasterxml.jackson.annotation.JsonIgnore;
import edu.miu.waa.maskmstore.domain.*;
import lombok.*;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import javax.validation.constraints.Digits;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private boolean featured=false;

    @NotBlank
    @NotEmpty
    private String title;

    @NotBlank
    @NotEmpty
    private String description;

    private String image;


    private double rating=0;

    public void setAvgRating() {
        if (reviews!=null&&!reviews.isEmpty())
        this.rating=reviews.stream().map(Review::getStars).reduce(0.0,Double::sum)/reviews.size();
    }

    private String status= ProductApprovedStatus.PENDING.getProductStatus();

    @OneToMany(cascade = CascadeType.ALL)
    @JoinTable
    @JsonIgnore
    private List<Review> reviews;


    @NotNull
    @Digits(fraction = 2,message = "Price Not Valid", integer = 5)
    private double price=0;

    @ManyToOne(targetEntity = ProductCategory.class)
    private ProductCategory productCategory;

    @DateTimeFormat
    private LocalDate createdOn;

    @OneToOne(mappedBy = "product")
    @JsonIgnore
    private Stock stock;

    @ManyToOne
    @JsonIgnore
    private Seller seller;


    @Override
    public String toString() {
        return "Product: \n" +
                "\n\ttitle : " + title + '\n' +
                "\n\tdescription : " + description + '\n';
    }
}
