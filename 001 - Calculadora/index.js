/*

Resultado do Calc | Resultado para o usuário
Abaixo de 17 | Muito Abaixo do peso
Entre 17 e 18.49 | Abaixo do peso
Entre 18.5 e 24.99 | Peso Normal
Entre 25 e 29.99 | Acima do peso
Entre 30 e 34.99 | Obesidade 1
Entre 35 e 39.99 | Obesidade 2
*/

const peso = 65;
const altura = 1.68;
const imc = Number((peso / (altura * altura)).toFixed(2));

console.log(imc)

switch (true){
    case imc < 17:
        console.log("Muito Abaixo do peso");
    break;
    case imc >= 17 && imc <= 18.49:
        console.log("Abaixo do peso");
    break;
    case imc >= 18.5 && imc <= 24.99:
        console.log("Peso Normal");
    break;
    case imc >= 25 && imc <= 29.99:
        console.log("Acima do peso");
    break;
    case imc >= 30 && imc <= 34.99:
        console.log("Obesidade 1");
    break;
     case imc >= 35 && imc <= 39.99:
        console.log("Obesidade 2");
    break;
    default:
    console.log("Obesidade 3");
    break;
}

