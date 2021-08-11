package edu.miu.waa.maskmstore.domain.stock;

public enum ProductApprovedStatus {
    APPROVED("Approved"),
    REJECTED("Rejected"),
    PENDING("Pending");

    private String productStatus;

    ProductApprovedStatus(String status){this.productStatus=status;}

    public String getProductStatus(){
        return this.productStatus;
    }
}
