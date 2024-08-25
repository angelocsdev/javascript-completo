"use strict"

/* var pode ser chamada mesmo estando dentro de um bloco */
if(true){
    var nome = "Gabriel"
}

console.log(nome)

/* é por isso que existe o let */
function teste() {
    let nome = "Gabriel"
    if(true){
        console.log(nome)
    }
    console.log(nome)
}

teste()

console.log(nome)

// os valores de const não podem ser alterados

const curso = "JavaScript"

console.log(curso)