// ById => nome do ID

const c1 = document.getElementById("c1")
const c2=document.getElementById("c2")


const arrayElementos=[c1,c2]

// for(d of arrayElementos) {
//     d.innerHTML="O CIENTISTA FUTURO"
// }

arrayElementos.map((e)=>{
    console.log(e)
    e.innerHTML="O CIENTISTA FUTURO"
})
console.log(arrayElementos)