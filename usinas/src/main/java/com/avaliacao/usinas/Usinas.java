package com.avaliacao.usinas;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class Usinas {
    private Integer id;
    private String nome;
    private String tipo;
    private String mwProduzido;
    private String diretorGeral;
    private String regiao;
}
