// const cursos=["HTML", "CSS", "JavaScript", "PHP", "React"]
// let c = cursos.map((e, i) => {
//     return e
// })

// console.log(c)

// let element = document.getElementsByTagName("div")
// element = [...element]

// element.map((e, i) => {
//     e.innerHTML = "Relampago Marquin"
// })

// const el=document.getElementsByTagName("div")
// const val=Array.prototype.map.call(el, ({innerHTML}) => {innerHTML})
// console.log(val)

const converterInt = (e) => parseInt(e)
let num = ["1", "2", "3", "4", "5"]
num.map(converterInt)
console.log(num)