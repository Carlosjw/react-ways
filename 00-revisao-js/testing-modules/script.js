const target = document.querySelector("#target");
let weightValue = document.querySelector('#weight');
let heightValue = document.querySelector('#height');
const calculate = document.querySelector('button');
import calcules from './imcForm.js'
const {imc} = calcules;

calculate.onclick = function(){
    target.innerText = imc(weightValue.value, heightValue.value).toFixed(2);
}
