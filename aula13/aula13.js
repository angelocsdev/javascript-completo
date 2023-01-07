let num=1000

if(num > 10) {
    console.log("Maior que 10!")
    if(num > 50) { // Aninhamento dos ifs. "Um if dentro de outro if".
        console.log("Maior que 50!")
    } if(num > 100) {
        console.log("Maior que 100!")
    }
} else if (num > 5) {
    console.log("Entre 6 e 10!")
} else {
    console.log("Menor ou igual a 5!")
}

console.log("Fim do programa!")