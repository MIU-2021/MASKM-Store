package edu.miu.waa.maskmstore.service.products;

import edu.miu.waa.maskmstore.domain.Review;
import edu.miu.waa.maskmstore.domain.Seller;
import edu.miu.waa.maskmstore.domain.stock.Product;
import edu.miu.waa.maskmstore.domain.stock.ProductApprovedStatus;
import edu.miu.waa.maskmstore.domain.stock.ProductCategory;
import edu.miu.waa.maskmstore.repository.CategoryRepository;
import edu.miu.waa.maskmstore.repository.ProductsRepository;
import edu.miu.waa.maskmstore.repository.SellerRepository;
import edu.miu.waa.maskmstore.service.categories.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ProductsServiceImpl implements ProductsService{

    @Autowired
    ProductsRepository productsRepository;
    @Autowired
    CategoryRepository categoryRepository;
    @Autowired
    SellerRepository sellerRepository;

    @Override
    public Product addProduct(Product product,long cat_id,String userName) {
        try {
            product.setCreatedOn(LocalDate.now());
            product.setAvgRating();
            Seller seller=sellerRepository.findSellerByUsername(userName);
            if (seller!=null){
                ProductCategory productCategory=categoryRepository.findById(cat_id).orElse(null);
                if (productCategory!=null){
                    product.setProductCategory(productCategory);
                }
                List<Product> products=seller.getProducts();
                products.add(product);
                sellerRepository.save(seller);
            }



            return product;


        }catch (IllegalArgumentException e){
            System.out.println("ADDING ERROR: "+e.getMessage());
            return null;
        }
    }

    @Override
    public Optional<Product> getProductById(long id) {
            return productsRepository.findById(id);
    }

    @Override
    public List<Product> getAllProducts(Pageable pageable) {
        return (List<Product>)productsRepository.findAll();
    }

    @Override
    public boolean isExistById(long id) {
        return productsRepository.existsById(id);
    }

    @Override
    public String deleteById(long id) {
//        if (productsRepository.get)
        productsRepository.deleteById(id);
        return "";
    }

    @Override
    public Product editProduct(long id, Product product) {
        try {
            if (productsRepository.existsById(id)){
                Product currentOne=productsRepository.findById(id).get();
                if (product.getTitle()!=null)
                    currentOne.setTitle(product.getTitle());
                if (product.getPrice()!=0)
                    currentOne.setPrice(product.getPrice());
                if (product.getDescription()!=null)
                    currentOne.setDescription(product.getDescription());
                if (product.getImages()!=null)
                    currentOne.setImages(product.getImages());
            }
            product.setCreatedOn(LocalDate.now());
            Product product1=productsRepository.save(product);
            return product1;
        }catch (IllegalArgumentException e){
            System.out.println("ADDING ERROR: "+e.getMessage());
            return null;
        }
    }

    @Override
    public Product makeItApprovedOrRejected(long id, String status) {
        try {
            if (productsRepository.existsById(id)){
                Product product=productsRepository.findById(id).get();
                if (status.equals("Approved")){
                    product.setStatus(ProductApprovedStatus.APPROVED.getProductStatus());
                    return productsRepository.save(product);

                }
                if (status.equals("Rejected")){
                    product.setStatus(ProductApprovedStatus.REJECTED.getProductStatus());
                    return productsRepository.save(product);


                }
                return null;
            }
            return null;
        }catch (IllegalArgumentException e){
            System.out.println("STATUS ERROR: "+e.getMessage());
            return null;
        }
    }

    @Override
    public Product makeItFeatured(long id, boolean featured) {
        try {
            if (productsRepository.existsById(id)){
                Product product=productsRepository.findById(id).get();
                product.setFeatured(featured);
                return productsRepository.save(product);
            }
            return null;
        }catch (IllegalArgumentException e){
            System.out.println("FEATURE ERROR: "+e.getMessage());
            return null;
        }
    }

    @Override
    public Product addReviewToProduct(long id, Review review) {
        try {
            if (productsRepository.existsById(id)){
                Product product=productsRepository.findById(id).get();
//                review.setProduct(product);
//                review.setProduct(product);
                List<Review> reviews=product.getReviews();
                reviews.add(review);
                return productsRepository.save(product);
            }
            return null;
        }catch (IllegalArgumentException e){
            System.out.println("AddReview ERROR: "+e.getMessage());
            return null;
        }
    }

    @Override
    public List<Review> getAllReviewsForProduct(long id) {
        try {
            if (productsRepository.existsById(id)){
             return productsRepository.findAllReviewsForProduct(id).stream()
                     .filter(review -> review.getStatus().equals(ProductApprovedStatus.APPROVED.getProductStatus()))
                     .collect(Collectors.toList());
            }
            return null;
        }catch (IllegalArgumentException e){
            System.out.println("GETALLREVIEWS ERROR: "+e.getMessage());
            return null;
        }
    }


    @Override
    public List<Product> getAllProductWithPagingAndSorting(Pageable pageable) {
        return productsRepository.findAll(pageable).stream().collect(Collectors.toList());
    }

    @Override
    public Review approveReview(long product_id, long review_id, String approved) {
        try {
            if (productsRepository.existsById(product_id)){
                Product product=productsRepository.findById(product_id).get();
                if (approved.equals("Approved")){
                    List<Review> reviews=product.getReviews();
//                    reviews.stream().map(review -> {
//                        if (review.getId()==review_id){
//                            review.setStatus(ProductApprovedStatus.APPROVED.getProductStatus());
//                        }
//                        return review;
//                    });
                    reviews.forEach(review -> {
                        if (review.getId()==review_id){
                            review.setStatus(ProductApprovedStatus.APPROVED.getProductStatus());
                        }
                    });
                    return productsRepository.save(product)
                            .getReviews().stream()
                            .filter(review -> review.getId()==review_id).findFirst().get();

                }
                if (approved.equals("Rejected")){
                    List<Review> reviews=product.getReviews();
                    reviews.stream().map(review -> {
                        if (review.getId()==review_id){
                            review.setStatus(ProductApprovedStatus.REJECTED.getProductStatus());
                        }
                        return review;
                    });                    return productsRepository.save(product)
                            .getReviews().stream()
                            .filter(review -> review.getId()==review_id).findFirst().get();


                }
                return null;
            }
            return null;
        }catch (IllegalArgumentException e){
            System.out.println("STATUS ERROR: "+e.getMessage());
            return null;
        }
    }

    @Override
    public List<Product> getAllProductsWithCat(Pageable pageable,long cat_ID) {
        return (List<Product>)productsRepository.findAllWithCategory(cat_ID);
    }

    @Override
    public List<Review> getAllReviewsWithoutApproval() {
        return (List<Review>) productsRepository.getAllReviewsWithoutApproval(ProductApprovedStatus.PENDING.getProductStatus());
    }

}
