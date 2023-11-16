/*
Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal da etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o calculo adequado.

Código Condição de pagamento:
1 - À vista Débito, recebe 10% de desconto;
2 - À vista no Dinheiro ou PIX, recebe 15% de desconto;
3 - Em duas vezes, preço normal de etiqueta sem juros;
4 - Acima de duas vzes, preço normal de etiqueta com juros de 10%.
*/

let precoNormal = 19.90;
let tipoPagamento = 4;

if (tipoPagamento === 1) {
    let precoFinal = precoNormal - (precoNormal*0.10);
    console.log ('O preço final será: ' + precoFinal.toFixed(2));
} else if (tipoPagamento === 2) {
    let precoFinal = precoNormal - (precoNormal*0.15);
    console.log ('O preço final será: ' + precoFinal.toFixed(2));
} else if (tipoPagamento === 3) {
    let precoFinal = precoNormal;
    console.log ('O preço final será: ' + precoFinal.toFixed(2));
} else {
    let precoFinal = precoNormal + (precoNormal*0.10);
    console.log ('O preço final será: ' + precoFinal.toFixed(2));
}