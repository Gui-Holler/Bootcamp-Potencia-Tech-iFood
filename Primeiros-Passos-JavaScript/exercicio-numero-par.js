// Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número par.
let numero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (i = 0; i <= numero.length; i++){
    let numeros = numero[i];
    
    if (numeros % 2 === 0){
    console.log(numeros)
    }
}