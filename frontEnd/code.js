let inputCode = document.getElementById("code");
let tela = document.getElementById("box-title");
let resultado = document.getElementById("resultado");
let telefone = document.getElementById("tijolao");
let bgTijolao = document.getElementById("bgTijolao");
function digitar(valor) {

    inputCode.value += valor;

}

function ok() {

    let http = new XMLHttpRequest();

    http.open("GET", traducaoURL + inputCode.value, true);
    http.send(null);
    console.log(http.response);
    tela.innerHTML = tela.innerHTML + `<p class='texto'>${http.response}</p>`;
    //resultado.innerHTML = "<p class='texto'>ACCENTURE</p>";
}


function limpar() {
    inputCode.value = "";
}