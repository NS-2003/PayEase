package com.example.payease.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.payease.entity.CardDetails;
import com.example.payease.service.CardDetailsService;

@RestController
public class CardDetailsController {
	
	@Autowired
	CardDetailsService cardDetailsService;
	
	@PostMapping("/cardDetails")
	public String setCardDetails(@RequestBody CardDetails obj) {
		cardDetailsService.setCardDetails(obj);
		return "Details Updated";
	}
}
