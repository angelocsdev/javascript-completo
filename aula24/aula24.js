//Funções anônimas

//Só é executada quando inicia a função!

const f1=function(...valores){
    let res=0
    for(v of valores){
        res+=v
    }
    return res
}

// Função construtor

const f2=new Function("v1","v2","v3","return v1+v2+v3") 

console.log(f1(30,8))

console.log(f2(10,5,3))