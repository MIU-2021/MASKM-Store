package edu.miu.waa.maskmstore.domain;
import edu.miu.waa.maskmstore.domain.stock.Product;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import javax.persistence.*;
import javax.validation.constraints.Digits;
import java.util.List;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity

public class Buyer extends User{
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private long id;

    @Digits(integer = 6, fraction = 0)
    long points;


    @ManyToMany
    @JoinTable
    private List<Order> orders;

}
