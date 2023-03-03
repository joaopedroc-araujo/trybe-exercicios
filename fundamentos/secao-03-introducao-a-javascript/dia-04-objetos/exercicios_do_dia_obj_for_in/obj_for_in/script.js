let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

//Imprima no console uma mensagem de boas-vindas para a personagem acima, na qual tenha o nome dela. Para isso, utilize a sintaxe meuObjeto.chave.
console.log(`Bem-vinda, ${info.personagem}`);

//Insira no objeto uma nova propriedade com o nome de chave ‘recorrente’ e o valor ‘Sim’ e, em seguida, imprima o objeto no console. Para isso, use a sintaxe meuObjeto['chave'] = valor. 
info['recorrente'] = 'Sim';

console.log(info.recorrente);

//Faça um for/in que mostre todas as chaves do objeto.
for (let index in info) {
    console.log(index);         //se fosse os valores seria console.log(info[index])
}

//Faça um novo for/in, mas agora mostre todos os valores das propriedades do objeto. 
for (let index in info) {
    console.log(info[index]);
}

//Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: “Tio Patinhas”, “Christmas on Bear Mountain, Dell’s Four Color Comics #178”, “O último MacPatinhas”, “Sim”. Então, imprima os valores de cada objeto juntos, de acordo com cada uma das chaves.
let uncle = {
    personagem: 'Tio Patinhas', 
    origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
}
let newObj1 = `${info.personagem} e ${uncle.personagem}`;
let newObj2 = `${info.origem} e ${uncle.origem}`;
let newObj3 = `${info.nota} e ${uncle.nota}`;
console.log(newObj1);
console.log(newObj2);
console.log(newObj3);
if (info.recorrente === uncle.recorrente) {
    console.log('Ambos recorrentes')
}

