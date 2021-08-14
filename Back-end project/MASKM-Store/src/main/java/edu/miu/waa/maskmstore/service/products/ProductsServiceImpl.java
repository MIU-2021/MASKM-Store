package edu.miu.waa.maskmstore.service.products;

import edu.miu.waa.maskmstore.domain.Review;
import edu.miu.waa.maskmstore.domain.Seller;
import edu.miu.waa.maskmstore.domain.stock.Product;
import edu.miu.waa.maskmstore.domain.stock.ProductApprovedStatus;
import edu.miu.waa.maskmstore.domain.stock.ProductCategory;
import edu.miu.waa.maskmstore.repository.CategoryRepository;
import edu.miu.waa.maskmstore.repository.ProductsRepository;
import edu.miu.waa.maskmstore.repository.SellerRepository;
import edu.miu.waa.maskmstore.service.ReviewRepository;
import edu.miu.waa.maskmstore.service.categories.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
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
    @Autowired
    ReviewRepository  reviewRepository;

    @Override
    public Product addProduct(Product product,long cat_id,String userName) {
        try {
            product.setCreatedOn(LocalDate.now());
            product.setAvgRating();
            Seller seller=sellerRepository.findSellerByUsername(userName);
            if (seller!=null){
                if (seller.getStatus().equals(ProductApprovedStatus.APPROVED.getProductStatus())){
                    ProductCategory productCategory=categoryRepository.findById(cat_id).orElse(null);
                    product.setSeller(seller);
                    if (productCategory!=null){
                        product.setProductCategory(productCategory);
                    }
                    List<Product> products=seller.getProducts();
                    products.add(product);
                    sellerRepository.save(seller);
                    System.out.println("This Product:"+product.getTitle()+" Added for "+userName);
                    return product;
                }else {
                    throw new IllegalArgumentException("this Seller is Not Accepted: "+userName);
                }
            }
            throw new IllegalArgumentException("We Don't have this User: "+userName);
        }catch (IllegalArgumentException e){
            System.out.println("ADDING ERROR: "+e.getMessage());
            return null;
        }
    }

    @Override
    public Product addProductWithoutSeller(Product product, long cat_id) {
        product.setCreatedOn(LocalDate.now());
        product.setAvgRating();
        ProductCategory productCategory=categoryRepository.findById(cat_id).orElse(null);
        if (productCategory!=null){
            product.setProductCategory(productCategory);
            List<Product> products=productCategory.getProducts();
            products.add(product);
            categoryRepository.save(productCategory);
            return product;
        }
        return null;
    }

    @Override
    public Optional<Product> getProductById(long id) {
        Optional<Product> product=productsRepository.getProductById(id);
            return product;
    }

    @Override
    public List<Product> getAllProducts(Pageable pageable) {
        return ((List<Product>)productsRepository.findAll());
    }

    @Override
    public List<Product> getAllProductsForOneSeller(Pageable pageable,String sellerUserName) {
        return ((List<Product>)sellerRepository.
                findAllProductBySellerUserName(sellerUserName,pageable))
                .stream().peek(Product::setAvgRating)
                .collect(Collectors.toList());
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
                if (product.getImage()!=null)
                    currentOne.setImage(product.getImage());
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
    public boolean deleteProduct(long product_id,String seller_userName) {
        try {
            if (productsRepository.deletableProduct(product_id).size()==0 || productsRepository.deletableProduct(product_id)==null)
            {
                Seller seller=sellerRepository.findSellerByUsername(seller_userName);
                List<Product> products=seller.getProducts();
                products.remove(productsRepository.getProductById(product_id).get());
                sellerRepository.save(seller);
                productsRepository.deleteById(product_id);
                return true;
            }
            throw new IllegalArgumentException("Can't Delete This product "+product_id+"because it's purchased before.");
        }catch (IllegalArgumentException e){
            System.out.println("Delete ERROR: "+e.getMessage());
            return false;
        }
    }

    @Override
    public Product addReviewToProduct(long id, Review review) {
        try {
            if (productsRepository.existsById(id)){
                Product product=productsRepository.getProductById(id).orElse(null);

                review.setProduct(product);
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
    public Review approveReview(long review_id, String approved) {
        try {
            if (reviewRepository.existsById(review_id)){
                if (approved.equals("Approved")) {
                    Review review=reviewRepository.findById(review_id).get();
                    review.setStatus(ProductApprovedStatus.APPROVED.getProductStatus());
                    return reviewRepository.save(review);
                }
                if (approved.equals("Rejected")){
                    Review review=reviewRepository.findById(review_id).get();
                    review.setStatus(ProductApprovedStatus.APPROVED.getProductStatus());
                    return reviewRepository.save(review);

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
