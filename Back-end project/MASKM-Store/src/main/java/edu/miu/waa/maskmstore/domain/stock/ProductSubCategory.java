package edu.miu.waa.maskmstore.domain.stock;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

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
}
