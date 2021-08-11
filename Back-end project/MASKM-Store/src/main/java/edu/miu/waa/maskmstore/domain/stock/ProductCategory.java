package edu.miu.waa.maskmstore.domain.stock;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Getter
@Setter
@Entity
public class ProductCategory {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id;
	
	private String name;

	@OneToMany(cascade = CascadeType.ALL,fetch = FetchType.LAZY)
	@JoinTable
	private List<ProductSubCategory> subCategories;


}
