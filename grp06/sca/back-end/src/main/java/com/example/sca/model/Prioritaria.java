package com.example.sca.model;

import com.example.sca.dto.request.PrioritariaRequest;
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
@Table(name = "prioritaria")
public class Prioritaria {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column(name = "data_prioritaria", nullable = false)
    private LocalDate data_prioritaria;

    @Column(name = "hora_atendimento", length = 10, nullable = false)
    private String hora_atendimento;

    @Column(name = "senha_atual", length = 4)
    private String senha_atual;

    @Column(name = "senha_anterior", length = 4)
    private String senha_anterior;

    public Prioritaria (Integer id) {

        this.id = id;
    }

    public static Prioritaria of(PrioritariaRequest request) {

        var prioritaria = new Prioritaria();
        BeanUtils.copyProperties(request, prioritaria);

        return prioritaria;
    }
}
