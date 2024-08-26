let n1=[10,20,30]
let n2=[11,22,33,44,55]
let n3=[...n1,...n2]
const jogador1={nome:"Pablo",energia:100,vidas:2,magia:300}
const jogador2={nome:"Joãozin",energia:87,vidas:4,velocidade:80}
const jogador3={...jogador1,...jogador2}

const objs1=document.getElementsByTagName("div")
const objs2=[...document.getElementsByTagName("div")]

const soma=(v1,v2,v3)=>{
    return v1+v2+v3
}

let valores=[1,5,4]

console.log(soma(...valores))

console.log(objs1)

console.log(objs2)

objs2.forEach(element => {
    element.innerHTML="Curso"
});

console.log(n1)
console.log(n2)
console.log(n3)
console.log(jogador3)