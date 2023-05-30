package com.example.sca.service;

import com.example.sca.dto.request.RetiradaExameRequest;
import com.example.sca.dto.response.PrioritariaResponse;
import com.example.sca.dto.response.RetiradaExameResponse;
import com.example.sca.model.RetiradaExame;
import com.example.sca.repository.RetiradaExameRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RetiradaExameService {

    @Autowired
    private RetiradaExameRepository repository;

    public void cadastrarRetiradaExame(RetiradaExameRequest request) {

        repository.save(RetiradaExame.of(request));
    }

    public List<RetiradaExameResponse> buscarSenhasRetiradas() {

        return RetiradaExameResponse.of(repository.findAll());
    }
    public RetiradaExame buscarPorId(Integer id) {

        return repository.findById(id).get();
    }

    @Transactional
    public RetiradaExameResponse atualizarRetiradaExame(RetiradaExameRequest request, Integer id) {

        var retirada_exame = buscarPorId(id);
        BeanUtils.copyProperties(RetiradaExame.of(request), retirada_exame, "id");

        return RetiradaExameResponse.of(repository.save(retirada_exame));
    }

    public void deletarSenhaRetiradaExame(Integer id) {

        var retirada_exame = buscarPorId(id);
        repository.delete(retirada_exame);
    }
}
