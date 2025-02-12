function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    
    let sorteados = [];
    let numero;
    for(let i = 0; i < quantidade; i++) {
        if(quantidade > (ate - de + 1)) {
            alert("A quantidade de números a serem sorteados não pode ser maior que o intervalo definido.");
            return;
        }

        numero = obterNumeroAleatorio(de, ate);

        while (sorteados.includes(numero)){
            numero = obterNumeroAleatorio(de,ate);
        }

        sorteados.push(numero);
    } 

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`

}

function obterNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
