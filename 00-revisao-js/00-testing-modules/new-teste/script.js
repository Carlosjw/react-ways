import showDate from "./functions.js"

let currentDate = document.querySelector('#currentDate');
let showCurrentHour = document.querySelector('#showCurrentHour');

showCurrentHour.onclick = function(){
    currentDate.textContent = showDate();
}