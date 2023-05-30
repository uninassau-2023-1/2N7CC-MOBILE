package com.example.sca.controller;

import com.example.sca.dto.request.PrioritariaRequest;
import com.example.sca.dto.response.PrioritariaResponse;
import com.example.sca.model.Prioritaria;
import com.example.sca.repository.PrioritariaRepository;
import com.example.sca.service.PrioritariaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("prioritaria")
public class PrioritariaController {

    @Autowired
    private PrioritariaService service;

    @Autowired
    private PrioritariaRepository repository;

    @PostMapping
    public void cadastrar(@RequestBody PrioritariaRequest request) {

        service.cadastrarSenhaPrioritaria(request);
    }

    @GetMapping
    public List<PrioritariaResponse> listar() {

        return service.buscarSenhasPrioritarias();
    }

    @GetMapping("/{id}")
    Prioritaria getSenhaPrioritariaById (@PathVariable Integer id) {

        return service.buscarPorId(id);
    }

    @DeleteMapping("/{id}")
    public void deletarSenhaPrioritaria(@PathVariable Integer id) {

        service.deletarSenhaPrioritaria(id);
    }

    @PutMapping("/{id}")
    public PrioritariaResponse atualizarSenhaPrioritaria(@RequestBody PrioritariaRequest request, @PathVariable Integer id) {

        return service.atualizarSenhaPrioritaria(request, id);
    }

}
