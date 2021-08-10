package edu.miu.waa.maskmstore.util;

public enum ResponseMessage {
	
	SUCCESS("success creation"),
	SUCCESS_GET("success"),
	MODIFIED("success modification"),
	SUCCESS_LOGIN("success login"),
	NO_CONTENT("Sent infotmation is empty"),
	ERROR("Unexpected error"),
	FORBIDDEN("Not allowed"),
	WRONG_CREDENTIALS("Wrong credentials"),
	FOUND("The user is already registered"),
	Product_NOT_FOUND("The order is not created"),
	ORDER_ITEM_NOT_FOUND("The order does not have items"),
	SUCCESS_UPDATE("success update"),
	ITEM_NOT_FOUND("The item was not created");
	
	private String message;
	
	ResponseMessage(String message) {
		this.message = message;
	}
	
	public String getMessage() {
		return this.message;
	}

}
