//Método MAP

const converterInt=(e)=>parseInt(e)
const dobrar=(e)=>e*2
const dividir=(e)=>e/2
let num=["1", "2", "3", "4", "5"].map(dividir)
console.log(num)


// const el=document.getElementsByTagName("div")
// const val=Array.prototype.map.call(el,({innerHTML})=>innerHTML)
// console.log(val)



// let el=document.getElementsByTagName("div")
// el=[...el]
// console.log(el)
// el.map((e,i)=>{
//     e.innerHTML="angellock"
// })



// const cursos=["HTML5", "CSS3", "JAVASCRIPT", "PHP", "REACT"]
// let c=cursos.map((el,i)=>{
//     return el
// })

// console.log(c)