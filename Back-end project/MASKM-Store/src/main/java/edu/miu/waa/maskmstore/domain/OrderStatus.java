package edu.miu.waa.maskmstore.domain;

public enum OrderStatus {
    Shipped("Shipped"),
    Returned("Returned"),
    OnTheWay("On the way");

    private String orderStatus;

    OrderStatus(String status){this.orderStatus=status;}

    public String getOrderStatus(){
        return this.orderStatus;
    }
}
