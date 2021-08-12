package edu.miu.waa.maskmstore.service.categories;

import edu.miu.waa.maskmstore.domain.stock.ProductCategory;
import edu.miu.waa.maskmstore.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoryServiceImpl implements CategoryService {

    @Autowired
    CategoryRepository categoryRepository;

    @Override
    public ProductCategory addCategory(ProductCategory productCategory) {
        try {
            return categoryRepository.save(productCategory);
        } catch (IllegalArgumentException e) {
            System.out.println("ADD CATEGORY ERROR: " + e.getMessage());
            return null;
        }
    }

    @Override
    public String deleteCategory(long id) {
        try {
            categoryRepository.deleteById(id);
            return "DELETE CATEGORY DONE";
        } catch (IllegalArgumentException e) {
            System.out.println("DELETE CATEGORY ERROR: " + e.getMessage());
            return "DELETE CATEGORY ERROR: " + e.getMessage();
        }
    }

    @Override
    public ProductCategory editCategory(long id, ProductCategory productCategory) {

        try {
            if (categoryRepository.existsById(id)) {
                ProductCategory oldOne = categoryRepository.findById(id).get();
                if (productCategory.getName() != null)
                    oldOne.setName(productCategory.getName());
                return oldOne;
            } else return null;
        } catch (IllegalArgumentException e) {
            System.out.println("EDIT CATEGORY ERROR: " + e.getMessage());
            return null;
        }
    }

    @Override
    public List<ProductCategory> getAllCats() {
        try {
            return (List<ProductCategory>)categoryRepository.findAll();
        }catch (IllegalArgumentException e){
            System.out.println("GET ALL CATS ERROR: "+e.getMessage());
            return null;
        }
    }

    @Override
    public Optional<ProductCategory> getOneCat(long cat_id) {
        return categoryRepository.findById(cat_id);
    }

    @Override
    public boolean isExistById(long id) {
        return categoryRepository.existsById(id);
    }
//
//    @Override
//    public ProductSubCategory addSubCategory(long id, ProductSubCategory productSubCategory) {
//        try {
//            if (categoryRepository.existsById(id)) {
//                ProductCategory oldOne = categoryRepository.findById(id).get();
//                if (productSubCategory != null){
//                    List<ProductSubCategory> productSubCategories=oldOne.getSubCategories();
//                    productSubCategories.add(productSubCategory);
//                    oldOne.setSubCategories(productSubCategories);
//                }
//                    categoryRepository.save(oldOne);
//                return productSubCategory;
//            } else
//                return null;
//        } catch (IllegalArgumentException e) {
//            System.out.println("ADD SUB CATEGORY ERROR: " + e.getMessage());
//            return null;
//        }
//    }
//
//    @Override
//    public String deleteSubCategory(long Cat_ID, long SubCat_ID) {
//        try {
//            if (categoryRepository.existsById(Cat_ID)) {
//                ProductCategory oldOne = categoryRepository.findById(Cat_ID).get();
////                oldOne.getSubCategories().stream().map()
//                categoryRepository.save(oldOne);
//                return "DELETE SUB CATEGORY DONE";
//            } else return null;
//        } catch (IllegalArgumentException e) {
//            System.out.println("DELETE SUB CATEGORY ERROR: " + e.getMessage());
//            return null;
//        }
//    }
//
//    @Override
//    public ProductSubCategory editSubCategory(long Cat_ID, long SubCat_ID, ProductSubCategory productSubCategory) {
//        return null;
//    }
//
//    @Override
//    public List<ProductSubCategory> getAllSubCats(long id) {
//        try {
//            List<ProductSubCategory> subcat=categoryRepository.findById(id).get().getSubCategories();
//            if (subcat!=null)
//            return subcat;
//            else return null;
//        }catch (IllegalArgumentException e){
//            System.out.println("GET ALL SUB CATS ERROR: "+e.getMessage());
//            return null;
//        }
//    }
}
