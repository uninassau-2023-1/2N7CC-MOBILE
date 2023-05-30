package com.example.sca.dto.request;

import lombok.Data;

import java.time.LocalDate;
@Data
public class PrioritariaRequest {

    private LocalDate data_prioritaria;
    private String hora_atendimento;
    private String senha_atual;
    private String senha_anterior;
}
