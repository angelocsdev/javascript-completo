function soma(...valores) {
    let tam=valores.length
    let res=0
    for (let v of valores) {
        res += v
    }
    return res
}

console.log(soma(10,5,90,7,88,6))