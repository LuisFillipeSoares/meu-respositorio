let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (let index = 0; index < numbers.length; index += 1) {
    numbersIndex = numbers[index];
    console.log(numbersIndex);
    soma += numbersIndex;
}

let mediaAritmetica = soma/numbers.length;

console.log("Soma :" + soma);
console.log("Média aritimetica: " + mediaAritmetica);

if (typeof mediaAritmetica === "number") {
  if (mediaAritmetica > 20) {
      console.log("valor maior que 20");
  } 
  else {
      console.log("valor menor ou igual a 20");
  } 
}
else {
  console.log("Não é possível ter média")
}

let maiorNumero = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > maiorNumero) {
    maiorNumero = numbers[i];
  }
}

console.log("O maior número é o: " + maiorNumero)


