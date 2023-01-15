const caixa1=document.querySelector("#caixa1")
const caixa2=document.querySelector("#caixa2")
const btn=document.querySelector("#btn-transferir")
const todosCursos=[...document.querySelectorAll(".curso")]

todosCursos.map((el)=>{
    el.addEventListener("click",(evt)=> {
        const curso=evt.target
        curso.classList.toggle("selecionado") // toggle faz adicionar ou remover o elemento quando o evento é ativado.

    })
})

btn.addEventListener("click",()=>{
    const cursosSelecionados=[...document.querySelectorAll(".selecionado")]
    const cursosNaoSelecionados=[...document.querySelectorAll(".curso:not(.selecionado)")]// not é usado no mesmo sentido do !=
    cursosSelecionados.map((el)=>{
        caixa2.appendChild(el)
    })
    cursosNaoSelecionados.map((el)=>{
        caixa1.appendChild(el)
    })
})
