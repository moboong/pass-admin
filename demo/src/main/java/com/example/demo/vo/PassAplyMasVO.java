package com.example.demo.vo;

import lombok.Data;

@Data
public class PassAplyMasVO {
	
	private String userId;
	private int aplySeq;
	private String sysId;
	private String secKey;
	private String qrData;
	private String pin;
	private String aplyDttm;
	private String authYn; 
	private String authDttm;
	private String regDttm;
	
}
