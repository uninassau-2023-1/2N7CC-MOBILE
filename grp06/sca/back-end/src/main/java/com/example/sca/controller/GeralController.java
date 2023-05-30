package com.example.sca.controller;

import com.example.sca.dto.request.GeralRequest;
import com.example.sca.dto.response.GeralResponse;
import com.example.sca.model.Geral;
import com.example.sca.repository.GeralRepository;
import com.example.sca.service.GeralService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("geral")
public class GeralController {

    @Autowired
    private GeralService service;

    @Autowired
    private GeralRepository repository;

    @PostMapping
    public void cadastrar(@RequestBody GeralRequest request) {

        service.cadastrarGeral(request);
    }

    @GetMapping
    public List<GeralResponse> listar() {

        return service.buscarSenhasGerais();
    }

    @GetMapping("/{id}")
    Geral getSenhaGeralById (@PathVariable Integer id) {

        return service.buscarPorId(id);
    }

    @DeleteMapping("/{id}")
    public void deletarSenhaGeral(@PathVariable Integer id) {

        service.deletarSenhaGeral(id);
    }

    @PutMapping("/{id}")
    public GeralResponse atualizarSenhaGeral(@RequestBody GeralRequest request, @PathVariable Integer id) {

        return service.atualizarSenhaGeral(request, id);
    }
}
