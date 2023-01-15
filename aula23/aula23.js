function soma(...valores) {// dentro dos () é o parâmetro. Parâmetros rest é quando utilizado o spread "..."   
    let res=0
    for(let v of valores) {
        res+=v
    }
    return res
}

console.log(soma(10,5,8,13,4))