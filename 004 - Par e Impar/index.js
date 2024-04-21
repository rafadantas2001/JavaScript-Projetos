
function parImpar(num) {
    
    if (num % 2 == 0) {
       return "O Número é Par";
    } 
    else {
        return "O Número é Ímpar";
    }
}

const num1 = 10;
const num2 = 7;

console.log(parImpar(num1));
console.log(parImpar(num2));