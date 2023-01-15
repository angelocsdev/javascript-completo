//funções geradoras. Exp: tem seu retorno adiado até precisar dele.

function* cores() {// função geradora tem um *
    yield "Vermelho"
    yield "Verde"
    yield "Azul"
}

const itc=cores()
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)