package com.example.sca.dto.request;

import lombok.Data;

import java.time.LocalDate;

@Data
public class GeralRequest {

    private LocalDate data_geral;
    private String hora_atendimento;
    private String senha_atual;
    private String senha_anterior;
}
