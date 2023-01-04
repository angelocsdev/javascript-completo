const objs1=document.getElementsByTagName("div")
const objs2=[...document.getElementsByTagName("div")]

// Com o spread dar para transformar uma propriedade em array

objs1.array.forEach(element => {
    console.log(element)
});

objs2.array.forEach(element => {
    element.innerHTML="CURSO"
});

console.log(objs2)