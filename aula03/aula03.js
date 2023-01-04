"use strict"//Modo restrito. NÃO ESQUECER DE USAR!

/*
if(true) {
    var nome="Ângelo"//Essa declaração permite que a variável seja executada mesmo estando dentro de um bloco, como é esse caso.
}
*/
/* 
if(true) {
    let nome="Ângelo"//Essa declaração não permite que a variável seja executada estando dentro de um bloco.
}
*/


//Para executá-la teria que ser assim:
//let nome="Ângelo"//No mesmo bloco.
//Ou:
function teste() {
    let nome="Ângelo"//Let
    if(true) {
        console.log("dentro do IF do teste: " + nome)//Dentro de um bloco.
    }
    console.log("dentro do teste: " + nome)//Ou no mesmo bloco.
}

teste()

const curso="JavaScript"//O valor não pode mais ser alterado.
curso="HTML"//Isso não funciona com 'const' porque o valor não pode mudar, só pode ser alterado lá em cima na declaração.

console.log(curso)//Fora de um bloco daria erro.