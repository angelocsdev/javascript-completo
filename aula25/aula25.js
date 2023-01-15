// Arrow Functions

//const soma=function(v1,v2) {return v1+v2} -> função anônima

const soma=(v1,v2)=>v1+v2 //-> função de seta/arrow function, só precisa colocar uma seta em vez de digitar function.

const nome=n=>n

const add=n=>n+10 // não precisa de return no padrão arrow function quando só tiver 1 linha

console.log(add(10))

console.log(soma(10,5))

console.log(nome("ÂNGELO"))