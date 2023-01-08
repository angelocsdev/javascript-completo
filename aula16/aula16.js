const objs=document.getElementsByTagName("div")

let num=[10,20,30,40,50]

for(o of objs) {
    console.log(o.innerHTML="CURSO") // use for of para executar os elementos ;)
}

for(o in objs){
    console.log(objs[0].innerHTML="Tubarão") // use for in para executar as posições ;)
}


for(let i=0; i < num.length; i++) {
    console.log(num[i])
}