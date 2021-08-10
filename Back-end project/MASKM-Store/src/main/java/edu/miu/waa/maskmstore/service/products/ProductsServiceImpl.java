package edu.miu.waa.maskmstore.service.products;

import edu.miu.waa.maskmstore.domain.stock.Product;
import edu.miu.waa.maskmstore.repository.ProductsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ProductsServiceImpl implements ProductsService{

    @Autowired
    ProductsRepository productsRepository;
    @Override
    public void addProduct(Product product) {

        product.setAddedOn(LocalDate.now());
        productsRepository.save(product);
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
    public List<Product> getAllProductWithPagingAndSorting(Pageable pageable) {
        return productsRepository.findAll(pageable).stream().collect(Collectors.toList());
    }

}
