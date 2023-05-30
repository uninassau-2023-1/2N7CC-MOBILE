package com.example.sca.model;

import com.example.sca.dto.request.GeralRequest;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.BeanUtils;

import java.time.LocalDate;
import java.time.LocalDateTime;
@Builder // Gerar um Objeto com a classe
@Data  // Fazer Get, Set e To String
@Entity // Para dizer uma Entidade
@AllArgsConstructor // Cria um construtor com todos os argumentos
@NoArgsConstructor // Cria um construtor sem nenhum argumento
@Table(name = "geral")
public class Geral {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column(name = "data_geral", nullable = false)
    private LocalDate data_geral;

    @Column(name = "hora_atendimento", length = 10, nullable = false)
    private String hora_atendimento;

    @Column(name = "senha_atual", length = 4)
    private String senha_atual;

    @Column(name = "senha_anterior", length = 4)
    private String senha_anterior;

    public Geral (Integer id) {

        this.id = id;
    }

    public static Geral of(GeralRequest request) {

        var geral = new Geral();
        BeanUtils.copyProperties(request, geral);

        return geral;
    }
}
