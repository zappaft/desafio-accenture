let inputCode = document.getElementById("code");
let tela = document.getElementById("box-title");
let resultado = document.getElementById("resultado");
let telefone = document.getElementById("tijolao");
let bgTijolao = document.getElementById("bgTijolao");

const traducaoURL = "http://localhost:3000/traduzir/";

function digitar(valor) {

    inputCode.value += valor;

}

async function ok() {

    await fetch(traducaoURL + inputCode.value, {
        method: 'GET',
        mode: 'cors',
    }).then(resultado => resultado.json().then(palavraObj => {
        const { palavra } = palavraObj;
        console.log(palavra);
        tela.innerHTML =
            tela.innerHTML + `<p class='texto'>${palavra}</p>`;
    }));

}

function limpar() {
    inputCode.value = "";
}