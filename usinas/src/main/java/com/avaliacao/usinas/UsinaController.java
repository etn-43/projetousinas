package com.avaliacao.usinas;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://127.0.0.1:5500")
@RequestMapping("/usina")
public class UsinaController {

    @Autowired
    UsinaDao usinaDao;

    @GetMapping
    public List<Usinas> listar(){
        return usinaDao.listarTodos();
    }

    @PostMapping
    public Usinas inserir(@RequestBody Usinas usinas){
        usinaDao.inserir(usinas);
        return usinas;
    }

    @PutMapping("/{id}")
    public Usinas editar(@PathVariable Integer id, @RequestBody Usinas usinas){
        usinaDao.editar(id, usinas);
        return usinas;
    }

    @DeleteMapping("/{id}")
    public void excluir(@PathVariable Integer id){
        usinaDao.excluir(id);
    }


}
