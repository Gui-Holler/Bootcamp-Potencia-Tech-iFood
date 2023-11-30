/*
Faça um programa que calcule e imprima o salário a ser transferido para um funcionário.

Para realizar o calculo receba o valor bruto do salário e o adicional dos benefícios.
O salário a ser transferido é calculado da seguinte maneira:

(valor bruto do salaro - percentual de imposto mediante ao salario) + adicional dos benefícios

Para calcular o percentual de impostos segue as aliquotas:
- de R$ 0,00 a R$ 1100,00 = 5.00%,
- 1100,01 a 2500,00 = 10.00%,
- maior que 2500,01 = 15.00%

Entrada:
A entrada consiste em vários arquivos de teste, que contareá o balo bruto slario e eadiconal dos benefífios. COnforme mostrado nos exemplos de entrada.

valores entrada 2000 e 250
valores saída 2050
*/

let salarioBruto = 2000;
let valorAdicionais = 250;

if (salarioBruto <= 1100) {
    let salarioLiquido = salarioBruto - (salarioBruto * 0.05);
    console.log(salarioLiquido + valorAdicionais);
} else if (salarioBruto > 1100.01 || salarioBruto <= 2500.00) {
    let salarioLiquido = salarioBruto - (salarioBruto * 0.10);
    console.log(salarioLiquido + valorAdicionais);
} else {
    let salarioLiquido = salarioBruto - (salarioBruto * 0.15);
    console.log(salarioLiquido + valorAdicionais);
}