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

    console.log("response");
    await fetch(traducaoURL + inputCode.value, {
        method: 'GET',
        mode: 'cors',
    }).then(response => {
        console.log(response.body);
        tela.innerHTML =
            tela.innerHTML + `<p class='texto'>${response.body}</p>`;
    })
}


function limpar() {
    inputCode.value = "";
}