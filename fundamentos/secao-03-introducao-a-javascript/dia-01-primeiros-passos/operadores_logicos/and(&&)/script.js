let currentHour = 3;
let message = '';

if (currentHour >= 22) {
    message = 'Não comer nada, hora de dormir';
}

else if (currentHour >=18 && currentHour <=22) {
    message = 'Hora do jantar';
}

else if (currentHour >= 14 && currentHour <18) {
    message = 'Toma um café';
}

else if (currentHour >= 11 && currentHour < 14) {    
    message = 'Hora do almoço';
}

else if (currentHour >= 4 && currentHour < 11) {
    message = 'Cheirinho de café'
}

console.log (message)