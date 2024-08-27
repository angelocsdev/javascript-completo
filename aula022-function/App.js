function soma(p1) {
    console.log(p1)
}

soma("Olá, Mundo!")
soma(2022)
soma(24+5)

function somar(n1=0, n2=0) { // <- valor padrão de parâmetros
    let res
    res = n1 * n2
    return res
}

let resSoma = somar(29,787)

console.log(resSoma)

let valor=0

console.log(valor)

function add(v) {
    return valor+v
}

valor=add(10)

console.log(valor)

valor=add(15)

console.log(valor)