package com.example.sca.dto.response;

import com.example.sca.model.Geral;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Builder
@Data
public class GeralResponse {

    private Integer id;
    private LocalDate data_geral;
    private String hora_atendimento;
    private String senha_atual;
    private String senha_anterior;

    public static GeralResponse of(Geral geral) {

        return GeralResponse.builder()
                .id(geral.getId())
                .data_geral(geral.getData_geral())
                .hora_atendimento(geral.getHora_atendimento())
                .senha_atual(geral.getSenha_atual())
                .senha_anterior(geral.getSenha_anterior())
                .build();
    }

    public static List<GeralResponse> of(List<Geral> gerais) {

        if (gerais == null) {

            return null;
        }

        List<GeralResponse> list = new ArrayList<>(gerais.size());

        for(Geral geral : gerais) {

            list.add(of(geral));
        }

        return list;
    }
}
