const caixaCursos=document.querySelector("#caixaCursos")
const btn_c=[...document.querySelectorAll(".curso")]
const c1_2=document.querySelector("#c1_2")
const cursos=["HTML5", "CSS3", "JavaScript", "PHP", "React", "MySQL", "ReactNative"]
const btnCursosSelecionado=document.getElementById("btnCursoSelecionado")

cursos.map((el, chave)=> {
    const novoElemento=document.createElement("div")
    novoElemento.setAttribute("id", "c"+chave)
    novoElemento.setAttribute("class", "curso c1")
    novoElemento.innerHTML=el

    const comandos=document.createElement("div")
    comandos.setAttribute("class", "comandos")

    const rb=document.createElement("input")
    rb.setAttribute("type", "radio")
    rb.setAttribute("name", "rb_curso")

    comandos.appendChild(rb)

    novoElemento.appendChild(comandos)

    caixaCursos.appendChild(novoElemento)
})

btnCursosSelecionado.addEventListener("click", (event) => {
    const todosRadios=[...document.querySelectorAll("input[type=radio]")]
    const radioSelecionado=todosRadios.filter((ele,ind,arr)=> {
        return ele.checked
    })
})