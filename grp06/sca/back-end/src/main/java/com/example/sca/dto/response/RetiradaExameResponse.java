package com.example.sca.dto.response;

import com.example.sca.model.RetiradaExame;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Builder
@Data
public class RetiradaExameResponse {

    private Integer id;
    private LocalDate data_exame;
    private String hora_atendimento;
    private String senha_atual;
    private String senha_anterior;

    public static RetiradaExameResponse of(RetiradaExame retiradaExame) {

        return RetiradaExameResponse.builder()
                .id(retiradaExame.getId())
                .data_exame(retiradaExame.getData_exame())
                .hora_atendimento(retiradaExame.getHora_atendimento())
                .senha_atual(retiradaExame.getSenha_atual())
                .senha_anterior(retiradaExame.getSenha_anterior())
                .build();
    }

    public static List<RetiradaExameResponse> of(List<RetiradaExame> retiradas) {

        if (retiradas == null) {

            return  null;
        }

        List<RetiradaExameResponse> list = new ArrayList<>(retiradas.size());

        for (RetiradaExame retiradaExame : retiradas) {

            list.add(of(retiradaExame));
        }

        return list;
    }
}
