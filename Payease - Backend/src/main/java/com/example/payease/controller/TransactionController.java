package com.example.payease.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.payease.entity.DueBills;
import com.example.payease.entity.Transaction;
import com.example.payease.service.TransactionService;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
public class TransactionController {
	
	@Autowired
	TransactionService transactionService;
	
	
	@GetMapping("/transactions")
	public List<Transaction> getTransactions(){
		return transactionService.getTransactions();
	}
	
	@PostMapping("/addTransaction")
	public void addTransaction(@RequestBody Transaction obj)
	{
		transactionService.addTransaction(obj);
	}
}
