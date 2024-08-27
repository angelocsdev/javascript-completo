const f = function (...valores) {
    let res = 0
    for(v of valores) {
        res += v
    }
    return res
}

console.log(f(10,23,4856,98))

const i = new Function("n1","n2", "return n1*n2") // FUNÇÃO CONSTRUTORA -> ANÔNIMA

console.log(i(10,34))