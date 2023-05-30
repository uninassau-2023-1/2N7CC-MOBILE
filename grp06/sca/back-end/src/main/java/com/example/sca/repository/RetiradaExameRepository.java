package com.example.sca.repository;

import com.example.sca.model.RetiradaExame;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RetiradaExameRepository extends JpaRepository <RetiradaExame, Integer> {
}
