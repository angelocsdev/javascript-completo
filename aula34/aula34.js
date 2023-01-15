const d=document.querySelector("div")
alert("olá, mundo!")
if(d != `<button>Mudou</button>`) {
        alert('CLIQUE NO BOTÃO!')
    }
d.addEventListener("click", ()=>{
    d.innerHTML=`<button>Mudou</button>`
    
})

function msg() {
    alert("CLICOU")
}