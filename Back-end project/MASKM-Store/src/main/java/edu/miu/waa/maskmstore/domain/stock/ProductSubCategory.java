package edu.miu.waa.maskmstore.domain.stock;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Getter
@Setter
@Entity
public class ProductSubCategory {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id;
	
	private String name;

	@ManyToOne
	@JoinColumn(name = "CAT_ID")
	private ProductCategory productCategory;

	@OneToMany
	@JoinTable
	private List<Product> products;
}
