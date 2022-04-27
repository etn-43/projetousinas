function enviarUsina(us, id){
    let headers = {
        "Content-Type": "application/json"
    }

    fetch("http://localhost:8080/usina/".concat(id), {
        headers: headers,
        method: "PUT",
        body: JSON.stringify(us)
    })
    .then(r => r.json())
    .then(resp => {
        alert("Usina atualizada");
    })
    .catch(error => alert(error));
}

const exibirPedido = document.querySelector('[data-form-geral]');
exibirPedido.addEventListener('submit', evento =>{
    evento.preventDefault()
    const id = evento.target.querySelector('[data-form-id]').value
    const nome = evento.target.querySelector('[data-form-nome]').value
    const tipo = evento.target.querySelector('[data-form-tipo]').value
    const mwProduzido = evento.target.querySelector('[data-form-mwProduzido]').value
    const diretorGeral = evento.target.querySelector('[data-form-diretorGeral]').value
    const regiao = evento.target.querySelector('[data-form-regiao]').value
    let obj = {};
    obj.nome = nome;
    obj.tipo = tipo;
    obj.mwProduzido = mwProduzido;
    obj.diretorGeral = diretorGeral;
    obj.regiao = regiao;

    enviarUsina(obj, id)
    
});

/*

let headers = {

    }

    fetch("http://localhost:8080/usina", {
        headers: headers,
        method: "POST",
        body: JSON.stringify(obj)
    })
    .then(r => r.json())
    .then(resp => {
        if (resp.status != 'OK') {
            alert(resp.mensagemErro);
            return;
        } else {
            alert("Usina incluído");
        }
    })

    */