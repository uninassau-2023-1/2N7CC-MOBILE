package com.example.sca.controller;

import com.example.sca.dto.request.RetiradaExameRequest;
import com.example.sca.dto.response.RetiradaExameResponse;
import com.example.sca.model.RetiradaExame;
import com.example.sca.repository.RetiradaExameRepository;
import com.example.sca.service.RetiradaExameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("retirada_exame")
public class RetiradaExameController {

    @Autowired
    private RetiradaExameService service;

    @Autowired
    private RetiradaExameRepository repository;

    @PostMapping
    public void cadastrar(@RequestBody RetiradaExameRequest request) {

        service.cadastrarRetiradaExame(request);
    }

    @GetMapping
    public List<RetiradaExameResponse> listar() {

        return service.buscarSenhasRetiradas();
    }

    @GetMapping("/{id}")
    RetiradaExame getSenhaRetiradaExameById (@PathVariable Integer id) {

        return service.buscarPorId(id);
    }

    @DeleteMapping("/{id}")
    public void deletarSenhaRetiradaExame(@PathVariable Integer id) {

        service.deletarSenhaRetiradaExame(id);
    }

    @PutMapping("/{id}")
    public RetiradaExameResponse atualizarSenhaRetiradaExame(@RequestBody RetiradaExameRequest request, @PathVariable Integer id) {

        return service.atualizarRetiradaExame(request, id);
    }

}
