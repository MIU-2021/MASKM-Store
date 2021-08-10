package edu.miu.waa.maskmstore.util;

import edu.miu.waa.maskmstore.domain.Product;
import edu.miu.waa.maskmstore.domain.Response;
import edu.miu.waa.maskmstore.domain.ResponseAllProducts;

import java.util.List;

public class Utilities {




	public static Response error(String errorMessage) {
		Response response = new Response();
		response.setResponseCode(ResponseCode.ERROR.getResponseCode());
		response.setResponseMessage(errorMessage);
		return response;
	}


	public static Response successCreation() {
		Response response = new Response();
		response.setResponseCode(ResponseCode.SUCCESS.getResponseCode());
		response.setResponseMessage(ResponseMessage.SUCCESS.getMessage());
		return response;
	}
	
	public static Response productNotCreated() {
		Response response = new Response();
		response.setResponseCode(ResponseCode.NOT_FOUND.getResponseCode());
		response.setResponseMessage(ResponseMessage.Product_NOT_FOUND.getMessage());
		return response;
	}
	
	public static Response orderItemsNotCreated() {
		Response response = new Response();
		response.setResponseCode(ResponseCode.NOT_FOUND.getResponseCode());
		response.setResponseMessage(ResponseMessage.ORDER_ITEM_NOT_FOUND.getMessage());
		return response;
	}

	public static Response itemNotCreated() {
		Response response = new Response();
		response.setResponseCode(ResponseCode.NOT_FOUND.getResponseCode());
		response.setResponseMessage(ResponseMessage.ITEM_NOT_FOUND.getMessage());
		return response;
	}
	
	public static Product editProduct(Product restaurantItem) {

		return restaurantItem;
	}

}
