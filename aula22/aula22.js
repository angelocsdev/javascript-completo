const padrao=0

let valor = 0

console.log(valor)

function add(v) {
    return valor + v
}

valor = add(10)

console.log(valor)

valor = add(10)

console.log(valor)

function soma(n1=padrao, n2=padrao) { // o valor inserido no parâmetro vai ser usado na função
    let res
    res = n1+n2
    return res
}
let resultado_soma = soma(5, 4234)
console.log(resultado_soma)