/*

=== Contagem de Cédulas ===

DESAFIO:
    Faça a leitura de um valor inteiro. Em seguida, calcule o menor número de notas possíveis (cédulas) onde o valor pode ser decomposto.
    As notas que você deve considerar são de 100, 50, 20, 10, 5, 2 e 1. Na sequência mostre o valor lido e a relação de notas necessárias.

ENTRADA:
    Você receberá um valor inteiro N (0 < N < 1000000).

SAÍDA:
    Exiba o valor lido e a quantidade mínima de notas de cada tipo necessárias, seguindo o exemplo de saída abaixo.
    Após cada linha deve ser imprimido o fim de linha.

*/

var numero = gets();
var num100 = 0, num50 = 0, num20 = 0, num10 = 0, num5 = 0, num2 = 0, num1 = 0;

console.log(numero);

while (numero >= 100) {
    numero = (numero - 100);
    num100++;
}

while (numero >= 50 && numero < 100) {
    numero = (numero - 50);
    num50++;
}

while (numero >= 20 && numero < 50) {
    numero = (numero - 20);
    num20++;
}

while (numero >= 10 && numero < 20) {
    numero = (numero - 10);
    num10++;
}

while (numero >= 5 && numero < 10) {
    numero = (numero - 5);
    num5++;
}

while (numero >= 2 && numero < 5) {
    numero = (numero - 2);
    num2++;
}

while (numero == 1) {
    numero = (numero - 1);
    num1++;
}

console.log(num100 +" nota(s) de R$ 100,00");
console.log(num50 +" nota(s) de R$ 50,00");
console.log(num20 +" nota(s) de R$ 20,00");
console.log(num10 +" nota(s) de R$ 10,00");
console.log(num5 +" nota(s) de R$ 5,00");
console.log(num2 +" nota(s) de R$ 2,00");
console.log(num1 +" nota(s) de R$ 1,00");