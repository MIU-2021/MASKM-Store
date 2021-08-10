package edu.miu.waa.maskmstore.service.products;

import edu.miu.waa.maskmstore.domain.stock.Product;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;

public interface ProductsService {

    public void addProduct(Product product);
    public Optional<Product> getProductById(long id);
    public List<Product> getAllProducts(Pageable pageable);
    public boolean isExistById(long id);
    public String deleteById(long id);

    public List<Product> getAllProductWithPagingAndSorting(Pageable pageable);


}
