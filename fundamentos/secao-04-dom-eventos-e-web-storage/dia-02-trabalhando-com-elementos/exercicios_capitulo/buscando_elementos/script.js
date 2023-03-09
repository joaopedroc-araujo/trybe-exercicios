//Acesse o elemento elementoOndeVoceEsta.
const whereYouAre = document.querySelector('#elementoOndeVoceEsta');

//Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
whereYouAre.parentNode.style.color = 'blue';

//Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
const firstChildOfChild = document.getElementById('primeiroFilhoDoFilho');
firstChildOfChild.innerHTML = 'Olá.';

//Acesse o primeiroFilho a partir de pai.
const father =  document.getElementById('pai');
console.log(father.firstElementChild);

//Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
console.log(whereYouAre.previousElementSibling);
//Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
console.log(whereYouAre.parentElement);

//Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
console.log(whereYouAre.nextElementSibling);
//Agora acesse o terceiroFilho a partir de pai.
console.log(father.lastElementChild.previousElementSibling);