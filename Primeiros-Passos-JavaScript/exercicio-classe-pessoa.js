/*
1- Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso/(altura*altura));
Instancie uma pessoa qualquer com peso e altura, e retorne o valor do seu IMC.
*/ 

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    IMC(){
        return this.peso/(this.altura * this.altura);
    }

    classificarImc(){
        let imc = this.IMC();
        if (imc < 18.5){
            return 'Você está abaixo do peso';
        } else if (imc >= 18.5 && imc < 25) {
            return 'Você está no peso ideal';
        } else if (imc >= 25 && imc < 30) {
            return 'Você está acima do peso';
        } else if (imc >= 30 && imc < 40) {
            return 'Você está obeso';
        } else {
            return 'Você está com obesidade grave';
        }
    }
}


let guilherme = new Pessoa('Guilherme', 65, 1.72);
console.log(guilherme.classificarImc());

let heitor = new Pessoa('Heitor', 13, 0.81);
console.log(heitor.classificarImc());