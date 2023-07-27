package com.example.payease.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.payease.entity.DueBills;

@Repository
public interface DueBillsRepository extends JpaRepository<DueBills, Integer> {
	
}
