let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function validateClient(client) {
    if (typeof client !== 'string') {
        return 'O parâmetro passado deve ser do tipo "string"!';
    } else {
        return true;
    }
}

function clientIndex(client) {
    for (let index = 0; index < clientesTrybeBank.length; index += 1) {
        if (client === clientesTrybeBank[index]) {
            return index;
        }
    }
    return false;
}

function removeClient(client) {
    let validate = validateClient(client);
    if (validate !== true) {
        return validate;
    }

    let index = clientIndex(client);
    if (index === false) {
        return 'Cliente não encontrado!';
    }

    clientesTrybeBank.splice(index, 1);
    return 'Cliente excluído(a) com sucesso!';
}

console.log (removeClient(false));
console.log (removeClient('Barney'));
console.log (removeClient('John'));
console.log (clientesTrybeBank);
