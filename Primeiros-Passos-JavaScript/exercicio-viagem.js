/*
Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
1 - Preço do combustível;
2- Gasto médio de combustível do carro por KM;
3- Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar está viagem.
*/

let gasolina = 5.69;
let media = 13;
let distancia = 230;

let gastoCombustivel = distancia / media;
let valorGasto = gastoCombustivel * gasolina;

console.log('O valor gasto de gasolina é: ' + Math.round(valorGasto) + ' reais');