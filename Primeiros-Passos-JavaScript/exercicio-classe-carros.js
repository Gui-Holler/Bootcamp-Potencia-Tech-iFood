/*
1- Crie uma classe para representar carros.
Os carros possuem uma marca, uma cor e um gasto médio de combustível por quilômetros rodado.
Crie um método que dado a quantidade de quilômetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.
*/ 

class Carros {
    marca;
    cor;
    gastoCombustivel;

    constructor(marca, cor, gastoCombustivel) {
        this.marca = marca;
        this.cor = cor;
        this.gastoCombustivel = gastoCombustivel;
    }

    calcularGasto(distancia, precoCombustivel){
        return (distancia * this.gastoCombustivel) * precoCombustivel;
    }
}


let uno = new Carros('Fiat', 'Preto', 1/13);
console.log(uno.calcularGasto(230, 5.64))

let kwid = new Carros('Renault', 'Branco', 1/14.8);
console.log(kwid.calcularGasto(230, 5.64))