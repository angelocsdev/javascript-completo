const caixa1=document.querySelector("#caixa1")
const btn_c=[...document.querySelectorAll(".curso")]
const c1_2document=document.querySelector("#c1_2")
const cursos=["HTML5", "CSS3", "JavaScript", "PHP", "React", "MySQL", "React Native"]

cursos.map((el, chave)=>{
    const novoElemento=document.createElement("div")
    novoElemento.innerHTML=el
    novoElemento.setAttribute("id", "c" +chave+1)
    novoElemento.setAttribute("class", "curso c1")

    const btn_lixeira=document.createElement("img")
    btn_lixeira.setAttribute("src", "./lixeira.png")
    btn_lixeira.setAttribute("class", "btn_lixeira")
    novoElemento.appendChild(btn_lixeira)

    btn_lixeira.addEventListener("click", (evt)=> {// forma de remover o elemento
        caixa1.removeChild(evt.target.parentNode)
    })
    caixa1.appendChild(novoElemento)
})