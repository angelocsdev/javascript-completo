#Operadores Bitwise

São operadores usados quando precisam realizar operações em níveis de bits/binários.

Ex:

1 -> 00000001
2 -> 00000010
3 -> 00000011
4 -> 00000100
5 -> 00000101
6 -> 00000110
7 -> 00000111
8 -> 00001000
9 -> 00001001
10 -> 00001010
11 -> 00001011
12 -> 00001100
13 -> 00001101
14 -> 00001110
15 -> 00001111 e assim por diante...

##Usando o operador &

1 com 1 = 1
0 com 0 = 0
1 com 0 = 0
0 com 1 = 0

##Usando o operador |

1 com 1 = 1
0 com 0 = 0
1 com 0 = 1
0 com 1 = 1

Esses dois operadores tem relação com &&/AND e ||/OR, são praticamente a mesma coisa só que em binários.

##Tem também o operador ^

1 com 1 = 0
0 com 0 = 0
1 com 0 = 1
0 com 1 = 1

Ele só retorna 1 quando os dois valores são diferentes.

##Deslocamento de bits

deslocando >> 1 divide pela metade
deslocando >> 2 divide pela metade 2x e assim por diante.

deslocando << 1 multiplica por 2
deslocando << 2 multiplica por 2 duas vezes e assim por diante.