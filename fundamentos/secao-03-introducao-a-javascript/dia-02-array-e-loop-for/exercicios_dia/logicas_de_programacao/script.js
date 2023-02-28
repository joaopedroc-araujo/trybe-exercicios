//O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero.
//Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10.
let factorial = 10;

for(let index = 10; index > 0; index -=1) {
    factorial *= index;
}

console.log (factorial);

//Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra, como a palavra “banana” para “ananab”. Utilize a string abaixo como exemplo. Depois, troque-a por outras para verificar se seu algoritmo está funcionando corretamente.

let word = 'tryber';
let reverseWord = '';

for (let index = 0; index < word.length; index += 1) {
  reverseWord += word[word.length - 1 - index];
}

console.log(reverseWord);

//Utilize a estrutura de repetição for para escrever dois algoritmos: um que imprima no console a maior palavra desse array e outro que imprima a menor. Considere o número de caracteres de cada palavra.
let array = ['java', 'javascript', 'python', 'html', 'css'];
let biggestWord = array[0];
let smallestWord = array[0];

for (let index = 1; index < array.length; index += 1) {
    if (array[index] > biggestWord ){
        biggestWord = array[index];
    }
}

for (let index = 1; index < array.length; index += 1) {
    if (array[index] < smallestWord ){
        smallestWord = array[index];
    }
}

console.log(biggestWord);
console.log(smallestWord);