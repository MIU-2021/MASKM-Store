package edu.miu.waa.maskmstore.util;

public enum ResponseCode {
	
	SUCCESS(200), 
	NO_CONTENT(204), 
	ERROR(500), 
	FORBIDDEN(403), 
	UNAUTHORIZED(401), 
	FOUND(302),
	NOT_FOUND(404);
	
	private int responseCode;
	
	ResponseCode(int code) {
		this.responseCode = code;
	}
	
	public int getResponseCode() {
		return this.responseCode;
	}

}
