package com.example.sca.model;

import com.example.sca.dto.request.RetiradaExameRequest;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.BeanUtils;

import java.time.LocalDate;

@Builder // Gerar um Objeto com a classe
@Data  // Fazer Get, Set e To String
@Entity // Para dizer uma Entidade
@AllArgsConstructor // Cria um construtor com todos os argumentos
@NoArgsConstructor // Cria um construtor sem nenhum argumento
@Table(name = "retirada_exame")
public class RetiradaExame {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column(name = "data_exame", nullable = false)
    private LocalDate data_exame;

    @Column(name = "hora_atendimento", length = 10, nullable = false)
    private String hora_atendimento;

    @Column(name = "senha_atual", length = 4)
    private String senha_atual;

    @Column(name = "senha_anterior", length = 4)
    private String senha_anterior;

    public RetiradaExame(Integer id) {

        this.id = id;
    }

    public static RetiradaExame of(RetiradaExameRequest request) {

        var retirada_exames = new RetiradaExame();
        BeanUtils.copyProperties(request, retirada_exames);

        return retirada_exames;
    }
}
