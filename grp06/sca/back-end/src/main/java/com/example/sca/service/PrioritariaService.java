package com.example.sca.service;

import com.example.sca.dto.request.PrioritariaRequest;
import com.example.sca.dto.response.PrioritariaResponse;
import com.example.sca.model.Prioritaria;
import com.example.sca.repository.PrioritariaRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PrioritariaService {

    @Autowired
    private PrioritariaRepository repository;

    public void cadastrarSenhaPrioritaria(PrioritariaRequest request) {

        repository.save(Prioritaria.of(request));
    }

    public List<PrioritariaResponse> buscarSenhasPrioritarias() {

        return PrioritariaResponse.of(repository.findAll());
    }

    public Prioritaria buscarPorId(Integer id) {

        return repository.findById(id).get();
    }

    public PrioritariaResponse atualizarSenhaPrioritaria(PrioritariaRequest request, Integer id) {

        var prioritaria = buscarPorId(id);
        BeanUtils.copyProperties(Prioritaria.of(request), prioritaria, "id");

        return PrioritariaResponse.of(repository.save(prioritaria));
    }

    public void deletarSenhaPrioritaria(Integer id) {

        var prioritaria = buscarPorId(id);
        repository.delete(prioritaria);
    }
}
