let lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};

let lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};

let lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};

// Crie uma função para adicionar o turno da noite na lesson2. Essa função deve ter três parâmetros: o objeto a ser modificado, a chave a ser adicionada e o valor dela.
function addShift(newShift) {
    lesson2.turno = 'noite';
    newShift = lesson2.turno;
    return newShift;
}
//console.log(addShift(lesson2.turno));

// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
function objectKeys(keys) {
    keys = Object.keys(lesson3);
    return keys;
}

//console.log(objectKeys())

// Crie uma função para mostrar o tamanho de um objeto. Essa função deve receber um objeto como parâmetro.
function objectSize(obj) {
    return Object.keys(obj).length;
}

console.log(objectSize(lesson1));

//Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
function objectValues(obj) {
    return Object.values(obj);
}

console.log(objectValues(lesson1));

//Crie um objeto de nome allLessons, que deve agrupar todas as aulas por meio do Object.assign. Cada chave desse novo objeto será uma aula, portanto essas chaves serão nomeadas lesson1, lesson2 e lesson3. Ao executar o comando console.log(allLessons), a saída deverá ser a seguinte:
let allLessons = Object.assign({},
    {
        lesson1: lesson1,
        lesson2: lesson2,
        lesson3: lesson3,
    });
console.log(allLessons);

//Com base no objeto elaborado no tópico anterior, crie uma função que retorne o número total de estudantes em todas as aulas.
function numberOfStudents(params) {
    let total = 0;
    let keys = Object.keys(params);
    for (let index in keys) {
        total += params[keys[index]].numberOfStudents;
    }
    return total;
}

console.log(numberOfStudents(allLessons));