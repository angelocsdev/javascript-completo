// break -> interrupção
// continue -> interrompe a execução atual e continua o loop

let n=0
let max=122000
let pares=0

for(let i=n;i<max;i++) {
    
    if(i%2!=0) {
        continue
    }
    pares++
}

console.log(pares)