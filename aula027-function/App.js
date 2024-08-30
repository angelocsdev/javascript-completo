function* cores() {
    yield "vermelho"
    yield "verde"
    yield "azul"
}

let itc = cores()
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)

function* perguntas() {
    const nome = yield "Qual seu nome?"
    const esporte = yield "Qual seu esporte favorito?"
    return "Seu nome é" + nome + ", seu esporte favorito é " + esporte
}

const itp=perguntas()
console.log(itp.next().value)
console.log(itp.next("Gabriel").value)
console.log(itp.next("Vôlei").value)