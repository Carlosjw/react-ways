const target = document.querySelector('#target');

// importando com o destructuring
import square from "./quadrado.js";
const {squareArea, squarePerimenter } = square;

// quando estamos importanto uma função de um arquivo com uma única função não precisamos fazer o destructuring
import randomNumber  from './randomNumber.js'

try {
    target.innerText = squareArea(randomNumber())
    target.style.color = 'blue';
    target.style.fontSize = '24px';
} catch (error) {
    target.style.color = 'red';
    target.style.fontSize = '24px';
    target.innerText = error
}
