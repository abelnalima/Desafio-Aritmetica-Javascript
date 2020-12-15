/*

=== Exibindo Números Pares ===

DESAFIO:
    Crie um programa que leia um número e mostre os números pares até esse número, inclusive ele mesmo.

ENTRADA:
    Você receberá 1 valor inteiro N, onde N > 0.

SAÍDA:
    Exiba todos os números pares até o valor de entrada, sendo um em cada linha. 

*/

var numero = gets();
var num_start = 1;

while (num_start <= numero) {
    if (num_start%2 == 0) {
        console.log(num_start);
    }
    num_start++;
}