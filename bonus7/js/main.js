'use strict';

const container = document.querySelector('p');
let date = new Date(), day;

const arr = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
for (let i=0; i<arr.length; i++) {
    
    if(i === date.getDay()){
        day = `<p><b> ${arr[i]} </b></p>`;
    } else if(i === 0 || i  === 6){
        day = `<p><em> ${arr[i]} </em></p>`;
    } else{
        day = `<p> ${arr[i]} </p>`;
    }
    container.innerHTML += day;
}