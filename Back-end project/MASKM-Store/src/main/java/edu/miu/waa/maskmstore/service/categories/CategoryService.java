package edu.miu.waa.maskmstore.service.categories;

import edu.miu.waa.maskmstore.domain.stock.ProductCategory;
import edu.miu.waa.maskmstore.domain.stock.ProductSubCategory;

public interface CategoryService {
    public ProductCategory addCategory(ProductCategory productCategory);
    public String deleteCategory(long id);
    public ProductCategory editCategory(long id,ProductCategory productCategory);

    public ProductSubCategory addSubCategory(long id, ProductSubCategory productSubCategory);
    public String deleteSubCategory(long Cat_ID,long SubCat_ID);
    public ProductSubCategory editSubCategory(long Cat_ID,long SubCat_ID,ProductSubCategory productSubCategory);
}
