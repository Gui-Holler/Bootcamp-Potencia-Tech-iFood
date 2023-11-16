/*
Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
1 - Preço do etanol;
2 - Preço da gasolina;
3 - O tipo de combustível que está no seu carro;
4 - Gasto médio de combustível do carro por KM;
5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar está viagem.
*/

let precoEtanol = 4.79;
let precoGasolina = 5.69;
let autonomiaCombustivel = 13;
let distancia = 230;
let tipoCombustivel = 'Etanol'
let gastoCombustivel = distancia / autonomiaCombustivel;

if (tipoCombustivel === 'Gasolina') {
    let valorGasto = gastoCombustivel * precoGasolina;
    console.log('O valor gasto em gasolina é: ' + valorGasto.toFixed(2) + ' reais');
} else {
    let valorGasto = gastoCombustivel * precoEtanol;
    console.log('O valor gasto em etanol é: ' + valorGasto.toFixed(2) + ' reais');
}