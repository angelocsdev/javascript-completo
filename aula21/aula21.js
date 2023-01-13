"use strict"

function canal() {
    let n1=10
    let n2=2
    let res = n1*n2
    if(res%2==0) {
        return "Par" // retorno
    } else { 
        return "Ímpar" // retorno
    }
}

let res=canal() // transformando a função em variável

console.log(res) // chamada da função transformada em variável
console.log("FIM!!")