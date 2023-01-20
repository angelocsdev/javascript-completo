const caixa1=document.querySelector("#caixa1")
const btn_c=[...document.querySelectorAll(".curso")]
const c1_2document=document.querySelector("#c1_2")
const cursos=["HTML5", "CSS3", "JavaScript", "PHP", "React", "MySQL", "React Native"]

cursos.map((el, chave)=>{
    const novoElemento=document.createElement("div")
    novoElemento.innerHTML=el // texto do elemento criado
    novoElemento.setAttribute("id", "c" +chave+1)// forma de colocar um atributo no elemento criado ex: id, class
    novoElemento.setAttribute("class", "curso c1")

    caixa1.appendChild(novoElemento) // forma de colocar o elemento criado em um "pai"
})

// const novoElemento=document.createElement("div")
// novoElemento.innerHTML="React Native" // texto do elemento criado
// novoElemento.setAttribute("id", "c7")// forma de colocar um atributo no elemento criado ex: id, class
// novoElemento.setAttribute("class", "curso c1")

caixa1.appendChild(novoElemento) // forma de colocar o elemento criado em um "pai"