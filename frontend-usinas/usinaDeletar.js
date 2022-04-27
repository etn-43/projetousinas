function enviarUsina(id){
    let headers = {
        "Content-Type": "application/json"
    }

    fetch("http://localhost:8080/usina/".concat(id), {
        headers: headers,
        method: "DELETE",
    })
    .then(resp => {
        alert("Usina deletada!");
    })
    .catch(error => alert(error));
}

const exibirPedido = document.querySelector('[data-form-geral]');
exibirPedido.addEventListener('submit', evento =>{
    evento.preventDefault()
    const id = evento.target.querySelector('[data-form-id]').value

    enviarUsina(id)
    
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