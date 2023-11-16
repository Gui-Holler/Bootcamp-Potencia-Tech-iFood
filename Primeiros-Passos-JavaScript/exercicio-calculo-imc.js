/*
O IMC - Índice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta.

Fórmula do IMC:
IMC = (altura * altura) / peso

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo:

IMC em adultos Condição:
- Abaixo de 18.5 = Abaixo do peso;
- Entre de 18.5 e 25 = Peso normal;
- Entre de 25 e 30 = Acima do peso;
- Entre de 30 e 40 = Obeso;
- Acima de 40 = Obesidade grave;
*/

let peso = 65;
let altura = 1.72;
let imc = peso / Math.pow(altura, 2);
console.log('Seu IMC é: ' + imc.toFixed(2));

if (imc < 18.5){
    console.log('Você está abaixo do peso');
} else if (imc >= 18.5 && imc < 25) {
    console.log('Você está no peso ideal');
} else if (imc >= 25 && imc < 30) {
    console.log('Você está acima do peso');
} else if (imc >= 30 && imc < 40) {
    console.log('Você está obeso');
} else {
    console.log('Você está com obesidade grave');
}