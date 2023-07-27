package com.example.payease.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.example.payease.PayeaseApplication;
import com.example.payease.entity.DueBills;
import com.example.payease.entity.FeedBackResponse;
import com.example.payease.service.DueBillsService;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
public class DueBillsController {
	
	@Autowired
	DueBillsService dueBillsService;
	
	@Autowired
	private RestTemplate restTemplate ;
	
	@GetMapping("/dueBills")
	public List<DueBills> getBills(){
		return dueBillsService.getDueBills();
	}
	
	@DeleteMapping("/deleteBill/{id}")
	public void deleteDueBill(@PathVariable int id) {
		dueBillsService.deleteDueBill(id);
	}
	
	@PostMapping("/addBill")
	public void addDueBill(@RequestBody DueBills obj) {
		dueBillsService.addDueBill(obj);
	}
	
	@PostMapping("/addFeedback")
	public FeedBackResponse feedBackAdd(@RequestBody FeedBackResponse feedback)
	{
		FeedBackResponse response = restTemplate.postForObject(
				"http://localhost:8001/feedback/addf" ,
				feedback ,
				FeedBackResponse.class 
		);
		return response ;
	}
}
