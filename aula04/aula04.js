"use strict" // modo restrito

//let num1 = "10", num2 = "5", num3 = "0"//variáveis podem ser declaradas em uma só linha. E em linhas separadas:
/* 

ASSIM:

let num1 = "0"
let num2 = "0"
let num3 = "0"


Ps: quando colocar mais de uma variável na mesma linha lembrar de colocar um valor para cada uma!!!

*/

/*

let num1, num2, num3
num1 = num2 = num3 = 10// E também pode fazer dessa forma caso o valor da variável seja o mesmo!!

*/
/*

console.log(num1, num2, num3)// da mesma forma na hora de executar a variável.

*/
let num1=0, num2=0, res=0

num1=5
num2=10

/*
res = num1 + num2//Somando os dois valores!

res = (num1 + num2)**2//O parântese é resolvido antes de todos, ele tem precedência sobre todas as operações.

res = num1+num2**2//Aqui a potência tem precedência.

res = num2 / num1//Divisão
    //2

res = num2 % num1//Resto da divisão
    //0
*/

num1++// Operador de incremento, o 'num1' recebe +1
num1++
num1++
num1 = num1 + 1 // -> num1+=1 -> num1++

num2--//Operador de decremento, o valor de 'num2' -1
num2--
num2--
num2 = num2 - 1 // -> num2-=1 -> num2--

//O 'num1+=' pode adicionar qualquer valor depois do =. Ex:

num1+=10

//A mesma coisa vale para o -=. Ex:
num2-=10

//Isso vale para todos os operadores. Ex:

num1*=2
num1/=4

res = num1 + num2

console.log(num1)//pode fazer uma variável para o resultado 'res'. Mas também pode fazer a operação dentro da execução.

/*
Ex:
console.log(num2-num1)
    5
*/