let n=0
let max=1000
let pares=0

for(let i=n; i<max; i++) {
    if(i%2!=0) {
        continue // -> não executa uma interação específica no loop e continua as outras
    }
    pares++
}
console.log("Quantidade de pares: " + pares)
console.log("FIM!")