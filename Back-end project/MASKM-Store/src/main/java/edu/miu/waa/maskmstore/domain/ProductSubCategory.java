package edu.miu.waa.maskmstore.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name="items_category")
public class ProductSubCategory {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id;
	
	private String name;

	@ManyToOne
	private ProductCategory productCategory;
}
