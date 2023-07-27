package com.example.payease.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="due_details")
public class DueBills {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int billId;
	
	private double amount;
	
	private String recipient;
	
	private long accountNumber;
	
	private String message;
	
	
	DueBills() {}
	
	public DueBills(int billId, double amount, String recipient, long accountNumber, String message) {
		super();
		this.billId = billId;
		this.amount = amount;
		this.recipient = recipient;
		this.accountNumber = accountNumber;
		this.message = message;
	}

	public int getBillId() {
		return billId;
	}

	public void setBillId(int billId) {
		this.billId = billId;
	}

	public double getAmount() {
		return amount;
	}

	public void setAmount(double amount) {
		this.amount = amount;
	}

	public String getRecipient() {
		return recipient;
	}

	public void setRecipient(String recipient) {
		this.recipient = recipient;
	}

	public long getAccountNumber() {
		return accountNumber;
	}

	public void setAccountNumber(long accountNumber) {
		this.accountNumber = accountNumber;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}
	
	
}
