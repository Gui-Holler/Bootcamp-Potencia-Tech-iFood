/*
Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre na faculdade, calcula e imprima sua média e a sua classificação conforme a tabela abaixo.

media = (nota1 + nota2 + nota3)/ 3;

Classificação:
- Média menor que 5, reprovado,
- Média entre 5 e 7, recuperação,
- Média maior que 7, aprovado.
*/

let nota1 = 7.5
let nota2 = 5.5
let nota3 = 8.5
let media = (nota1 + nota2 + nota3)/ 3;

console.log ('A média do aluno é: ' + media.toFixed(2));

if (media < 5) {
    console.log ('Aluno reprovado');
} else if (media > 7) {
    console.log ('Aluno aprovado');
} else {
    console.log ('Aluno em recuperação');
}