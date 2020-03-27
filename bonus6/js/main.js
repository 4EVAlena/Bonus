'use strict';

const getRandomInt = function(max) {
  return Math.floor(Math.random() * max);
};

const isNum = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

const game = function() {
  let attempts = 10;
  let randomNumber = getRandomInt(101); 
  

  return function start() {
    console.log('Осталось попыток: ', attempts);  
    console.log('randomNumber: ', randomNumber);

    if (attempts >= 1) {
      --attempts;
      
      const num = prompt('Угадай число от 1 до 100');

      if (num === null) {
        alert('До свидания');
        return;
      } 
        
        if(isNum(num)) {
          const realNum = +num;
          if(realNum > randomNumber) {
            alert(`Загаданное число меньше`);
            start();
          }

          if (realNum < randomNumber) {
            alert(`Загаданное число больше`);
            start();
          } 

          if (realNum === randomNumber) {
            alert(`Молодец, Вы угадали!`);
            if (confirm('Сыграем еще?')) {
              game()();
            } else {
              alert('До свидания');
            }
          }

        } else {
          alert('Вы ввели не число. Начинаем заново.');
          game()();
        }    
    } else if (attempts < 1) {
      alert('Ваши попытки исчерпаны. Игра закончена.');
      if (confirm('Сыграем еще?')) {
        game()();
      } else {
        alert('До свидания');
      }          
    }   
  }    
}    
game()();