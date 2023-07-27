package com.example.payease.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.payease.entity.CardDetails;
import com.example.payease.repository.CardDetailsRepository;

@Service
public class CardDetailsService {
	
	@Autowired
	CardDetailsRepository cardDetailsRepository;
	
	public String setCardDetails(CardDetails obj) {
		cardDetailsRepository.save(obj);
		return "Details Updated";
	}
}
