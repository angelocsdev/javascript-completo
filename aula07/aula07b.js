// USANDO OPERADORES LÓGICOS NO IF

let n1, n2, n3, n4
n1=10
n2=5
n3=15
n4=2

if((n1 < n2) || (n3 > n4)) { // F COM V em ||/OU vai dar verdadeiro.
    console.log("Verdadeiro!")
} else {
    console.log("Falso!")
}

if((n1 < n2) && (n3 > n4)) { // F COM V em &&/AND vai dar falso.
    console.log("Verdadeiro!")
} else {
    console.log("Falso!")
}

if(!((n1 > n2) || (n3 > n4))) { // se usar not/não, negar tudo o resultado vai inverter.
    console.log("Verdadeiro!")
} else {
    console.log("Falso!")
}