/*

=== Análise de Números ===

DESAFIO:
    Você deve fazer a leitura de 5 valores inteiros. 
    Em seguida mostre quantos valores informados são pares, quantos valores informados são ímpares, 
    quantos valores informados são positivos e quantos valores informados são negativos.

ENTRADA:
    Você receberá 5 valores inteiros.

SAÍDA:
    Exiba a mensagem conforme o exemplo de saída abaixo, sendo uma mensagem por linha e 
    não esquecendo o final de linha após cada uma.

*/

var numeros = Array(5);
for (i = 0; i <= numeros.length; i++){
    numeros[i] = gets();
}

num_par = numeros.filter(value => value%2 == 0);
num_impar = numeros.filter(value => value%2 != 0);
num_pos = numeros.filter(value => value > 0);
num_neg = numeros.filter(value => value < 0);

console.log(num_par.length +" valor(es) par(es)");
console.log(num_impar.length +" valor(es) impar(es)");
console.log(num_pos.length +" valor(es) positivo(s)");
console.log(num_neg.length +" valor(es) negativo(s)");