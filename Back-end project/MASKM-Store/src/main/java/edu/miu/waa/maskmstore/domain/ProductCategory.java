package edu.miu.waa.maskmstore.domain;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import javax.persistence.*;
import java.util.List;

@Getter
@Setter
@Entity
@Table(name="items_category")
public class ProductCategory {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id;
	
	private String name;

	@OneToMany(cascade = CascadeType.ALL,fetch = FetchType.LAZY)
	@JoinTable
	private List<ProductSubCategory> subCategories;


}
