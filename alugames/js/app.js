let QntdJogosAlugados = 0
function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');
    
    if(imagem.classList.contains('dashboard__item__img--rented')) {
        if(confirm(`Você tem certeza que deseja prosseguir com a devolução do jogo: ${nomeJogo.textContent}?`)){
        imagem.classList.remove('dashboard__item__img--rented');
        botao.textContent = 'Alugar';
        botao.classList.remove('dashboard__item__button--return');}
        QntdJogosAlugados--;
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.textContent = 'Devolver';
        botao.classList.add('dashboard__item__button--return');
        QntdJogosAlugados++;
    }

    QuantidadeDeAlugados();
}


function QuantidadeDeAlugados() {
    console.log(`Total de jogos alugados: ${QntdJogosAlugados}`)
}

document.addEventListener('DOMContentLoaded' , function(){
    QntdJogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    QuantidadeDeAlugados();
})

function essaPalavraEUmPalindromo(palavra){

    let separandoAsLetrasDaPalavra = palavra.split("");
    let palavraInvertida = separandoAsLetrasDaPalavra.reverse();
    palavraInvertida = palavraInvertida.join("");

    if(palavra == palavraInvertida) {
        console.log(`A palavra ${palavra} é um palíndromo!`);
    } else { 
        console.log(`A palavra ${palavra} não é um palíndromo!`);

    }
}
essaPalavraEUmPalindromo("radar")

function ordenar(a,b,c) {
    return [a,b,c].sort((x,y) => x - y);
}

console.log(ordenar(3,2,1));