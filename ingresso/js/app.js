function comprar() {
    let tipoDeIngresso = document.getElementById('tipo-ingresso').value;;
    let qtd = parseInt(document.getElementById('qtd').value);

    if(tipoDeIngresso == 'pista'){
        comprarPista(qtd);
    } else if(tipoDeIngresso == 'superior') {
        comprarSuperior(qtd);
    } else {
        comprarInferior(qtd);
    }


}

function comprarPista(qtd){
    let pista = parseInt(document.getElementById('qtd-pista').textContent);
    if(qtd > pista) {
        alert('Quantidade indisponível para tipo pista!');
    } else {
        pista = pista - qtd;
        document.getElementById('qtd-pista') = pista;
        alert('Compra realiza com sucesso!');
    }
}
function comprarSuperior(qtd){
    let superior = parseInt(document.getElementById('qtd-superior').textContent);
    if(qtd > superior) {
        alert('Quantidade indisponível para tipo superior');
    }
    else {
        superior = superior - qtd;
        document.getElementById('qtd-superior').textContent = superior;
        alert('Compra realizada com sucesso! ');
    }
}
function comprarInferior(qtd){
    let inferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if(qtd > inferior) {
        alert('Quantidade indisponível para tipo inferior');
    }
    else {
        inferior = inferior - qtd;
        document.getElementById('qtd-inferior').textContent = inferior;
        alert('Compra realizada com sucesso! ');
    }
}