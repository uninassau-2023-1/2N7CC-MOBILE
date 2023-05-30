package com.example.sca.dto.request;

import lombok.Data;

import java.time.LocalDate;

@Data
public class RetiradaExameRequest {

    private LocalDate data_exame;
    private String hora_atendimento;
    private String senha_atual;
    private String senha_anterior;
}
