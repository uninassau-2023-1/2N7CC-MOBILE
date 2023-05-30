package com.example.sca.repository;


import com.example.sca.model.Prioritaria;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PrioritariaRepository extends JpaRepository<Prioritaria, Integer> {
}
