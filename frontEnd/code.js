let inputCode = document.getElementById("code");
let tela = document.getElementById("box-title");
let telefone = document.getElementById("tijolao");
function digitar(valor){

    inputCode.value+= valor;

}

function ok(){

   //inputCode.classList.add('texto');


   tela.innerHTML =  tela.innerHTML + `<h1>ACCENTURE</h1>`;
}

function limpar(){
    inputCode.value = "";
}