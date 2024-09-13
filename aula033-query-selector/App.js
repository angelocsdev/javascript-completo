const divTodas = [...document.getElementsByTagName("div")]
const cursosTodos = [...document.getElementsByClassName("curso")]
const cursosC1 = [...document.getElementsByClassName("c1")]
const cursosC2 = [...document.getElementsByClassName("c2")]
const query_divTodas = document.querySelector("div")

console.log(query_divTodas)

console.log(divTodas)
console.log(cursosTodos)
console.log(cursosC1)
console.log(cursosC2)


function Clicar() {
    cursosTodos.map((e) => {
        e.classList.add("destaque")
    })
}


