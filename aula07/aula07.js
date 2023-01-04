let n1, n2, n3, n4
n1=10
n2=5
n3=15
n4=2

console.log((n1 > n2) && (n1 > n3)) // com o &&/and a operação dá resultado "false" mesmo tendo uma verdadeira e uma falsa, porque V com F em "&&" da falso.

console.log((n1 > n2) || (n1 > n3)) // com ||/ou a operação dá resultado "true" porque V com F em "||" da verdadeiro.

console.log(!((n1 > n2) || (n1 > n3))) // o not faz com que o resultado da operação se inverta. Se antes dava resultado verdadeiro agora dá false e vice-versa.