let fruits = [3, 4, 10, 1, 12];
let fruitsAdd = 0;


for (let index = 0; index < fruits.length; index += 1) {
    fruitsAdd += fruits[index]; 
}   
console.log(fruitsAdd)
if (fruitsAdd > 15) {
    console.log(fruitsAdd);
} else {
    console.log('Número menor que 16');
}


/*
//exercise.js
let fruits = [3, 4, 10, 1, 12];
let sum = 0;

for (let index = 0; index < fruits.length; index += 1) {
  sum += fruits[index];
}

if (sum > 15) {
  console.log(sum);
} else {
  console.log('valor menor que 16');
}

(c==4 || d <=6)   &&    (a >= 5  &&   b != 9)   ||     (!(a<5))
  F       F                 v            v              v
                   f                            v
*/

