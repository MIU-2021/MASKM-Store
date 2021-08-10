package edu.miu.waa.maskmstore.domain;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import javax.persistence.*;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity

public class Buyer {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;
    long Points;
}
