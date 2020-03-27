'use strict';

const div = document.querySelector('div'),
    p = document.querySelector('p');

let date = new Date();
let day = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
let month = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

let hour = '';
let hours = date.getHours();
    if (hours%10 === 1) {
      hour = " час";
    } else if (hours%10 ===2 || hours%10 ===3 || hours%10 ===4) {
      hour = " часа";
    } else {
      hour = " часов";
    }  

const addZero = (num) => {
    if (num <= 9) {
        num = '0' + num;
    }
    return (num);
}

div.innerText = `Сегодня ${day[date.getDay()]}, ${date.getDay()}  ${month[date.getMonth()]}  ${date.getFullYear()} года,  ${date.getHours()} ${hour} ${date.getMinutes()} минут ${date.getSeconds()} секунд`;

p.innerText = `${date.toLocaleDateString()} -  ${addZero(date.getHours())}:${addZero(date.getMinutes())}:${addZero(date.getSeconds())}`;



