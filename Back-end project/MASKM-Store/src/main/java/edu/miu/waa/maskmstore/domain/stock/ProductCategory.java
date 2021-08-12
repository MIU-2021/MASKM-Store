package edu.miu.waa.maskmstore.domain.stock;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import javax.persistence.*;
import java.util.List;

@Getter
@Setter
@Entity
public class ProductCategory {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long id;
	
	private String name;


	@OneToMany(cascade = CascadeType.ALL)
	@JoinTable
	@JsonIgnore
	private List<Product> products;

}
