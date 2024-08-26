function nome() {
    console.log("Gabriel")
}

for(let i=0;i<10;i++) {
    nome()
}

function soma() {
    let n1=2
    let n2=10
    let soma=n1+n2
    console.log(soma)
}


for(let i=0;i<10;i++) {
    soma()
}

function mudarTexto() {
    let d1=document.getElementById("d1")
    let d2=document.getElementById("d2")
    let d3=document.getElementById("d3")
    d1.innerHTML="JavaScript Moderno e Profissional"
    d2.innerHTML="JavaScript Moderno e Profissional"
    d3.innerHTML="JavaScript Moderno e Profissional"
}

function voltarTexto() {
    d1.innerHTML="Gabriel"
    d2.innerHTML="Curso"
    d3.innerHTML="JavaScript"
}

