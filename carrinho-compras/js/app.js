let totalGeral;
limpar();
function adicionar(){
    let produto = document.getElementById('produto').value;
    let quantidade = document.getElementById('quantidade').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let preco = quantidade * valorUnitario;
    
    
    let listaProduto = document.getElementById('lista-produtos');
    listaProduto.innerHTML = listaProduto.innerHTML +
    `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}</span> ${nomeProduto} <span class="texto-azul">${preco}</span>
    </section> `;
    if(!produto){
        alert('Selecione um produto válido!');
        return;
    }

    if(quantidade <= 0){
        alert('Selecione uma quantidade válida!');
        return;
    }

    totalGeral = totalGeral + preco;
    let total = document.getElementById('valor-total');
    total.textContent = `R$ ${totalGeral}`;
    document.getElementById('qualidade').value = 0;

}

function limpar(){
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
}