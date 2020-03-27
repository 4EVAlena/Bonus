'use strict';
// 1-й способ
let arr = ['20', '444', '66', '77', '88', '45', '201'];

for (let item of arr) {
  if (item.startsWith('2') || item.startsWith('4')) {
    console.log(item);
  }
}
// 2-й способ
let arr2 = ['20', '444', '66', '77', '88', '45', '201'];

arr2.forEach(function(item) {
  if (item.startsWith('2') || item.startsWith('4')) {
    console.log(item);
  }
});
 

marking: 
// Последовательность простых чисел начинается с 2, по условию задачи до 100
for (let i=2; i<=100; i++) {
  // j-делитель, если i делится на j/на само себя, то делится и на 1
  for (let j=2; j<i; j++) {
    if (i%j === 0) {
      continue marking;
    }  
  }
  console.log(`${i}: делители этого числа: 1 и ${i}`);
}