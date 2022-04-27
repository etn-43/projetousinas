package com.avaliacao.usinas;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class UsinaDao {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public List<Usinas> listarTodos(){
        return jdbcTemplate.query(
            "SELECT * FROM usina",
            (result, rowNum) -> new Usinas(
                    result.getInt("id"),
                    result.getString("nome"),
                    result.getString("tipo"),
                    result.getString("mwProduzido"),
                    result.getString("diretorGeral"),
                    result.getString("regiao")
            )
        );
    }


    public int inserir(Usinas usinas) {
        return jdbcTemplate.update(
            "INSERT INTO usina (nome, tipo, mwProduzido, diretorGeral, regiao) VALUES (?, ?, ?, ?, ?)",
                usinas.getNome(),
                usinas.getTipo(),
                usinas.getMwProduzido(),
                usinas.getDiretorGeral(),
                usinas.getRegiao()

        );
    }

    public int editar(Integer id, Usinas usinas) {
        return jdbcTemplate.update(
            "UPDATE usina SET nome = ?, tipo = ?, mwProduzido = ?, diretorGeral = ?, regiao = ? WHERE id = ?",
                usinas.getNome(),
                usinas.getTipo(),
                usinas.getMwProduzido(),
                usinas.getDiretorGeral(),
                usinas.getRegiao(),
                id
        );
    }

    public void excluir(Integer id) {
        jdbcTemplate.update(
            "DELETE FROM usina WHERE id=?",
            new Object[]{ id }
        );
    }
}
