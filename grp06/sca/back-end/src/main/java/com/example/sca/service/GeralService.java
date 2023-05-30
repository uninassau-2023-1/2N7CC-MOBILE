package com.example.sca.service;

import com.example.sca.dto.request.GeralRequest;
import com.example.sca.dto.response.GeralResponse;
import com.example.sca.model.Geral;
import com.example.sca.repository.GeralRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GeralService {

    @Autowired
    private GeralRepository repository;

    public void cadastrarGeral(GeralRequest request) {

        repository.save(Geral.of(request));
    }

    public List<GeralResponse> buscarSenhasGerais() {

        return GeralResponse.of(repository.findAll());
    }

    public Geral buscarPorId(Integer id) {

        return repository.findById(id).get();
    }
    
    @Transactional
    public GeralResponse atualizarSenhaGeral(GeralRequest request, Integer id) {

        var geral = buscarPorId(id);
        BeanUtils.copyProperties(Geral.of(request), geral, "id");

        return GeralResponse.of(repository.save(geral));
    }

    public void deletarSenhaGeral(Integer id) {

        var geral = buscarPorId(id);
        repository.delete(geral);
    }
}
