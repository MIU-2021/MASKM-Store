package edu.miu.waa.maskmstore.service;

import edu.miu.waa.maskmstore.domain.Address;
import edu.miu.waa.maskmstore.domain.Seller;
import edu.miu.waa.maskmstore.domain.stock.Product;
import edu.miu.waa.maskmstore.domain.stock.ProductApprovedStatus;
import edu.miu.waa.maskmstore.repository.SellerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SellerServiceImpl implements  SellerService{
    @Autowired
    SellerRepository sellerRepository;

    public Seller getSellerByEmail(String email){
        return sellerRepository.findSellerByEmail(email);
    };


    @Override
    public Seller getSellerBySId(long id) {

        return sellerRepository.findSellerBySId(id);
    }
    @Override
    public Seller getSellerByUserName(String userName) {

        return sellerRepository.findSellerBySUserName(userName);
    }


    @Override
    public Seller makeItApprovedOrRejected(long id, String status) {
        try {
            if (sellerRepository.existsById(id)){
                Seller seller=sellerRepository.findById(id).get();
                if (status.equals("Approved")){
                    seller.setStatus(ProductApprovedStatus.APPROVED.getProductStatus());
                    return sellerRepository.save(seller);

                }
                if (status.equals("Rejected")){
                    seller.setStatus(ProductApprovedStatus.REJECTED.getProductStatus());
                    return sellerRepository.save(seller);


                }
                return null;
            }
            return null;
        }catch (IllegalArgumentException e){
            System.out.println("STATUS ERROR: "+e.getMessage());
            return null;
        }
    }

}
