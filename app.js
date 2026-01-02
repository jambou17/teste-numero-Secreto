let listaNumerosSorteados = [];
let numeroLImite = 100
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

//VARIAVEIS

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 2.5; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
}
//mensagem que aparece na tela e Voz narrando os Textos

function exibirMensagemInicial() {
  exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 100');  
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela ('h1', 'Acertou!');
        let palavratentativa = tentativas > 1 ? 'tentativas' : 'tentativa' ;
        let mensagemTentativas = `Você descobriu o numero secreto com ${tentativas} ${palavratentativa} !`;
        exibirTextoNaTela ('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    
} else {
    if (chute > numeroSecreto) {
         exibirTextoNaTela ('p', `O numero secreto é menor do que ${chute}` );
    } else {
     exibirTextoNaTela ('p', `O numero secreto é maior que ${chute}`);

     } 
       tentativas++; 
       limparCampo();

    }

}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLImite + 1);
    let quantidadeDeElementosNaLista = listaNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLImite) {
        listaNumerosSorteados = []

    }
    if (listaNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaNumerosSorteados.push(numeroEscolhido);
        console.log(listaNumerosSorteados);
        return numeroEscolhido;
    }
    //FUNÇÃO QUE GERA O NUMERO ALEATORIO E ARMAZENA NA LISTA PARA NAO SE REPETIR O NUMERO
}

function limparCampo() {
    let chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}












