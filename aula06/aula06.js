//Qual a diferença entre == e ===?
/*
let n1 = 1
let n2 = "1"

//let v1 = {nome: "Ângelo"}
//let v2 = {nome: "Ângelo"}

console.log(n1 == n2)// n1 é igual a n2? True
console.log(n1 === n2)// n1 é igual e idêntico a n2? False. Porque n1 foi atribuído como um número e n2 como uma string entre ""
console.log(v1 == v2)
console.log(v1 === v2)// Os dois resultados dão false porque a referência é diferente, mas se colocar assim:
*/
/*

let v1 = {nome: "Ângelo"}
let v2 = v1// Os dois resultados darão true. Porque agora a referência é a mesma. O v1 é um valor e o v2 é v1, ou seja, a mesma coisa. A posição é a mesma.
console.log(v1 == v2) // true
console.log(v1 === v2) // true ;)

*/

//Como fazer a entrada de dados em JS?

/*

let nome = prompt("Digite seu nome.")// O prompt é usado para mostrar uma caixa quando inicia a página para digitar um dado que é pedido. Nesse caso "Digite seu nome.".

*/

//Qual a diferença entre != e !?

/*

let n1=2
let n2=1

console.log(n1!=n2)// sem o ! é apenas comparação.
console.log(!(n1!=n2))// com a negação o resultado inverte.

*/

//Como identificar Media Queries em JS?

if(navigator.userAgent.match(/Android/i)
|| navigator.userAgent.match(/webOS/i)
|| navigator.userAgent.match(/iPhone|iPad|iPod/i)
|| navigator.userAgent.match(/BlackBerry/i)
|| navigator.userAgent.match(/Windows Phone/i)
|| navigator.userAgent.match(/Opera Mini/i)
|| navigator.userAgent.match(/IEMobile/i)
) {
    console.log("Celular")
}else{
    console.log("PC")
}