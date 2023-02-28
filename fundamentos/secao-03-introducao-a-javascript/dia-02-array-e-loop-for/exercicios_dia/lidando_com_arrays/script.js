let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Percorra o array imprimindo todos os valores contidos nele com a função console.log().
/*for (let index = 0; index < numbers.length; index+= 1) {
    console.log(numbers[index]);
}*/

//Some todos os valores contidos no array e imprima o resultado.
/*let result = 0;

for (let index = 0; index < numbers.length; index += 1) {
    result += numbers[index];
}

console.log(result);

*/
//Calcule e imprima a média aritmética dos valores contidos no array. 
//A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.
/*let result = 0;
let averageNumber;

for (let index = 0; index < numbers.length; index += 1) {
    result += numbers[index];
}

averageNumber = result / numbers.length;
console.log (averageNumber);*/

//Com base no código que acabou de gerar, faça com que: caso o valor final seja maior que 20, imprima a mensagem “Valor maior que 20”; e, caso não seja maior que 20, imprima a mensagem “Valor menor ou igual a 20”.

/*let result = 0;
let averageNumber;

for (let index = 0; index < numbers.length; index += 1) {
    result += numbers[index];
    averageNumber = result / numbers.length;  
}

if (averageNumber > 20) {
    console.log('Valor maior que 20');
} else {
    console.log ('Valor menor ou igual a 20');
}*/

//Utilizando for, descubra o maior valor contido no array e imprima-o.
/*let highNumber = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
    if (numbers[index] > highNumber) {
        highNumber = numbers[index];
    }
}

console.log(highNumber);*/

//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “Nenhum valor ímpar encontrado”.
/*let evenNumbers = 0
for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 !== 0){
       evenNumbers += 1;
    }
}

if (evenNumbers === 0) {
    console.log('Nenhum valor ímpar encontrado');
} else {
    console.log (evenNumbers);
}*/

//Utilizando for, descubra o menor valor contido no array e imprima-o.
/*let smallestNumber = numbers[0];

for (let index = 1; index < numbers.length; index +=1){
    if (numbers[index] < smallestNumber){
        smallestNumber = numbers[index];
    }
}

console.log (smallestNumber);*/

//Utilizando for, crie um array que vá de 1 a 25 e imprima o resultado.

let newArray = [0];

for (let index = 1; index <= 25; index += 1) {
    newArray.push(index);
}

console.log (newArray);

//Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2
for (let index = 0; index < newArray.length; index += 1) {
    console.log (newArray[index] / 2);
}

