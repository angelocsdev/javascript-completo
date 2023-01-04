const jogador1={nome:"Rafaela", energia:100, vidas:3, magia:150}
const jogador2={nome:"Emilly", energia:100, vidas:5, velocidade:200}
const jogador3={...jogador1, ...jogador2} // dá pra unir objetos com spread

console.log(jogador1)
console.log(jogador2)
console.log(jogador3)