/*
=== Quantidade de Números Positivos ===

DESAFIO:
    Crie um programa que leia 6 valores. Você poderá receber valores negativos e/ou positivos como entrada, 
    devendo desconsiderar os valores nulos. Em seguida, apresente a quantidade de valores positivos digitados.

ENTRADA:
    Você receberá seis valores, negativos e/ou positivos.

SAÍDA:
    Exiba uma mensagem dizendo quantos valores positivos foram lidos assim como é exibido abaixo no exemplo de saída. 
    Não esqueça da mensagem "valores positivos" ao final.

EXEMPLO SAÍDA:
    4 valores positivos
*/

var numero = Array(6);

for(i = 0; i <= 5; i++) {
    numero[i] = gets();
}

num_pos = numero.filter(value => value > 0);
console.log(num_pos.length +" valores positivos");