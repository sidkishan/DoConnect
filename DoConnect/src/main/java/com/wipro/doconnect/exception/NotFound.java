package com.wipro.doconnect.exception;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
public class NotFound extends RuntimeException
{
	private static final long serialVersionUID = 1L;
	public NotFound() {
	}
	
	public NotFound(String errorMsg) {
		super();
		this.errorMsg = errorMsg;
	}

	@SuppressWarnings("unused")
	private String errorMsg;

}
