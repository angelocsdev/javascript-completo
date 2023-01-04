'use strict'//Comando para ativar o modo estrito/restrito no JavaScript. Usando esse comando algumas coisas vão ficar restritas como é o caso das variáveis:

/*
let citações = 'Pica-Pau' -> Essa forma com modo restrito é permitida.
citações = 'Pica-Pau' -> Essa não!

Resumindo, com o modo restrito a variável tem que ser declarada seja em 'var' 'let' ou 'const'.
*/

let nome = 'Bruno'
let citações = 'Pica-Pau'
/*
console.log('Não consigo ler nada. - Pica-Pau')//Forma de colocar 'strings' no JS, texto escrito...
console.log(nome)//Também podem rodar variáveis em JS.
*/
console.log('"Não consigo ler nada." - ' + citações + '.')//Também dá para unir as duas coisas, tanto strings/textos em JS, quanto variáveis.