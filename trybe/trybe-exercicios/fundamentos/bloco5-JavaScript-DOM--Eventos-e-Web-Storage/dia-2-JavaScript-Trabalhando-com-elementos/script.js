console.log(document.querySelector('#elementoOndeVoceEsta'));
document.querySelector('#elementoOndeVoceEsta').parentNode.style.color = "Red";
document.querySelector('#primeiroFilhoDoFilho').innerHTML = "Texto Filho do Filho";
console.log(document.querySelector('#pai').firstElementChild);
console.log(document.querySelector('#elementoOndeVoceEsta').previousElementSibling);
console.log(document.querySelector('#elementoOndeVoceEsta').nextSibling);
console.log(document.querySelector('#elementoOndeVoceEsta').nextElementSibling);
console.log(document.querySelector('#pai').childNodes[5]);


let pai = document.querySelector('#pai');

let novoFIlho = document.createElement('section');
novoFIlho.id = "irmaoElementDeOndeVoceEsta"

pai.appendChild(novoFIlho)

console.log(document.querySelector('#pai'));