function comprar() {
    let tipoDeIngresso = document.getElementById('tipo-ingresso').value;;
    let qtd = parseInt(document.getElementById('qtd').value);

    if(qtd < 0) {
        alert('Digite um número positivo ! ');
        return;
    }

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

function stringInt(string) {
    return parseInt(string);
}

function adicao(a,b) {
    return a + b;
}
function subtracao(a,b) {
    return a - b;
}
function multiplicacao (a,b) {
    return a * b;
}
function divisao(a,b) {
    if(b !== 0) {
        return a/b 
    } else {
        return 'Erro';
    }
}

function calculadora(operacao, a,b) {
    switch(operacao) {
        case 'soma': 
            return adicao(a,b);
        case 'subtracao':
            return subtracao(a,b);
        case 'multiplicacao':
            return multiplicacao(a,b);
        case 'divisao':
            return divisao(a,b);
    }
}

function imparPar(numero) {
    if((numero%2) == 0) {
        console.log('Numero é par');
    }else {
        console.log('Numero é impar');
    }
}

function conversorTemperatura(temperatura, escala){
    if( escala == 'C') {
        return celsius(temperatura);
    } else if (escala == 'F'){
        return fr(temperatura)
    }
}

function celsius(fr){
    return (fr - 32)* 5/9
}

function fr(celsius){
    return (celsius*1.8) + 32
}

console.log(conversorTemperatura('20', 'F'))