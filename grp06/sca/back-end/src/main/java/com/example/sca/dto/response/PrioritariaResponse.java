package com.example.sca.dto.response;

import com.example.sca.model.Prioritaria;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Builder
@Data
public class PrioritariaResponse {

    private Integer id;
    private LocalDate data_prioritaria;
    private String hora_atendimento;
    private String senha_atual;
    private String senha_anterior;

    public static PrioritariaResponse of(Prioritaria prioritaria) {

        return PrioritariaResponse.builder()
                .id(prioritaria.getId())
                .data_prioritaria(prioritaria.getData_prioritaria())
                .hora_atendimento(prioritaria.getHora_atendimento())
                .senha_atual(prioritaria.getSenha_atual())
                .senha_anterior(prioritaria.getSenha_anterior())
                .build();
    }

    public static List<PrioritariaResponse> of(List<Prioritaria> prioritarias) {

        if (prioritarias == null) {

            return null;
        }

        List<PrioritariaResponse> list = new ArrayList<>(prioritarias.size());

        for (Prioritaria prioritaria: prioritarias) {

            list.add(of(prioritaria));
        }

        return list;
    }
}
