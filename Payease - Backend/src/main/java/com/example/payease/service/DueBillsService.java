package com.example.payease.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.payease.entity.DueBills;
import com.example.payease.repository.DueBillsRepository;

@Service
public class DueBillsService {
	
	@Autowired
	DueBillsRepository dueBillsRepository;
	
	public List<DueBills> getDueBills() {
		return dueBillsRepository.findAll();
	}
	
	public void addDueBill(DueBills obj) {
		dueBillsRepository.save(obj);
	}
	
	public String deleteDueBill(int id) {
		dueBillsRepository.deleteById(id);
		return "Deleted";
	}
	
}
