const caixa = document.querySelector("#caixa")

let mapa = new Map()

mapa.set("curso", "JavaScript")
mapa.set(10, "CFB Cursos")
mapa.set(1, 100)
mapa.set("canal", 100)

console.log(mapa)

let pes=10

if(mapa.has("pes")) {
    caixa.innerHTML="A chave existe na coleção"
} else {
    caixa.innerHTML="A chave não está na coleção"
}
//caixa.innerHTML=mapa.get("curso")