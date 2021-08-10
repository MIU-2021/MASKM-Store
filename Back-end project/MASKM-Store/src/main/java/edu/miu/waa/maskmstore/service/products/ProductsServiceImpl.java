package edu.miu.waa.maskmstore.service.products;

import edu.miu.waa.maskmstore.domain.Product;
import edu.miu.waa.maskmstore.domain.Response;
import edu.miu.waa.maskmstore.domain.ResponseOneProduct;
import edu.miu.waa.maskmstore.repository.ProductsRepository;
import edu.miu.waa.maskmstore.util.ResponseCode;
import edu.miu.waa.maskmstore.util.Utilities;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ProductsServiceImpl implements ProductsService{

    @Autowired
    ProductsRepository productsRepository;
    @Override
    public void addProduct(Product product) {
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
    public void deleteById(long id) {
        productsRepository.deleteById(id);
    }

    @Override
    public List<Product> getAllProductWithPagingAndSorting(Pageable pageable) {
        return productsRepository.findAll(pageable).stream().collect(Collectors.toList());
    }

}
