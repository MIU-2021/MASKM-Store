package edu.miu.waa.maskmstore.domain;
import com.fasterxml.jackson.annotation.JsonIgnore;
import edu.miu.waa.maskmstore.domain.stock.Product;
import edu.miu.waa.maskmstore.domain.stock.ProductApprovedStatus;
import edu.miu.waa.maskmstore.domain.stock.Stock;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import javax.persistence.*;
import javax.validation.Valid;
import java.util.List;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Seller {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private long sId;


    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="User_ID")
    User user;
    @OneToMany(cascade = CascadeType.ALL)
    @JoinTable
    @JsonIgnore
    List<Product> products;

    private String status= ProductApprovedStatus.PENDING.getProductStatus();

}
