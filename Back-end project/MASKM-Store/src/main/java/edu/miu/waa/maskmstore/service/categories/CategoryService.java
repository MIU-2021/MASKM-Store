package edu.miu.waa.maskmstore.service.categories;

import edu.miu.waa.maskmstore.domain.stock.ProductCategory;

import java.util.List;
import java.util.Optional;

public interface CategoryService {
    public ProductCategory addCategory(ProductCategory productCategory);
    public String deleteCategory(long id);
    public ProductCategory editCategory(long id,ProductCategory productCategory);
    public List<ProductCategory> getAllCats();
    public Optional<ProductCategory> getOneCat(long cat_id);
    public boolean isExistById(long id);

//    public ProductSubCategory addSubCategory(long id, ProductSubCategory productSubCategory);
//    public String deleteSubCategory(long Cat_ID,long SubCat_ID);
//    public ProductSubCategory editSubCategory(long Cat_ID,long SubCat_ID,ProductSubCategory productSubCategory);
//    public List<ProductSubCategory> getAllSubCats(long id);

}
