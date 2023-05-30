package com.example.sca.repository;

import com.example.sca.model.Geral;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GeralRepository extends JpaRepository<Geral, Integer> {
}
