/*

=== Consumo Médio do Automóvel ===

DESAFIO:
    Você deve calcular o consumo médio de um automóvel onde será informada a distância total
    percorrida (em Km) e o total de combustível consumido (em litros).

ENTRADA:
    Você receberá dois valores: um valor inteiro X com a distância total percorrida (em Km),
    e um valor real Y que representa o total de combustível consumido, com um dígito após
    o ponto decimal.

SAÍDA:
    Exiba o valor que representa o consumo médio do automóvel (3 casas após a vírgula),
    incluindo no final a mensagem "km/l".

*/

var dist = parseInt(gets());
var comb = parseFloat(gets());
var consumo = parseFloat((dist/comb).toFixed(3));

console.log(consumo +" km/l");