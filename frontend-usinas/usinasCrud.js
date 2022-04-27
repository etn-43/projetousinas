function listarPedidos() {
    fetch("http://localhost:8080/usina", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
          }
    })
    .then(r => r.json())
    .then(resp => {
        exibirListaPedidos(resp);})
    .catch(error => alert(error));   
}

function exibirListaPedidos(lista) {
    const produto = document.querySelector('[data-list]');
    var valorTamanho = Object.keys(lista).length;
    console.log(lista[0]);

    for (let i = 0; i < valorTamanho; i++) {
        var tipo = JSON.stringify(lista[i].tipo).replace(/"/g,"")
        var mwProduzido = JSON.stringify(lista[i].mwProduzido).replace(/"/g,"")
        var nome = JSON.stringify(lista[i].nome).replace(/"/g,"")
        var regiao = JSON.stringify(lista[i].regiao).replace(/"/g,"")
        var diretorGeral = JSON.stringify(lista[i].diretorGeral).replace(/"/g,"")
        var id = JSON.stringify(lista[i].id).replace(/"/g,"")

        const pedido = document.createElement('li')
        pedido.classList.add('task')

        
        var conteudo = `<p>ID: ${id} <br>NOME: ${nome} <br>TIPO: ${tipo} <br>DIRETOR(A): ${diretorGeral} <br>LOCALIDADE: ${regiao} <br>MWH PRODUZIDO: ${mwProduzido}</p>`
        pedido.innerHTML = conteudo
        produto.appendChild(pedido)
    }
}

const exibirPedido = document.querySelector('[data-form-button]');
exibirPedido.addEventListener('click', listarPedidos);

