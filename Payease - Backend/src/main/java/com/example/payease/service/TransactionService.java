package com.example.payease.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.payease.entity.Transaction;
import com.example.payease.repository.TransactionRepository;

@Service
public class TransactionService {
	
	@Autowired
	TransactionRepository transactionRepository;
	
	
	public List<Transaction> getTransactions(){
		return transactionRepository.findAll();
	}
	
	public void addTransaction(Transaction obj) {
		transactionRepository.save(obj);
	}
}
