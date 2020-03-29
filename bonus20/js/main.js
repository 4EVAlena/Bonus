
function reverse(s) {
    let arr = [];
    // перебираем элементы полученной строки
    for (let i = 0, len = s.length; i <= len; i++)
    // записываем их в массив arr в обратном порядке
     arr.push(s.charAt(len - i));
     // объединяем все элементы полученного массива в строку (теперь все элементы в обратном порядке)
     return arr.join('');
}  
function isPalindrome(word, words) {
    return word === reverse(word) && !words.includes(word)
}
// получаем все палиндромы из передаваемой строки и записываем их в массив subStrings, самый длинный - в консоль
function findLongestPalindrome(s) {
    let subStrings = [];
    // на каждой итерации внешний цикл задает количество символов подстроки поиндексно (счетчик i) - увеличивается на 1
    for (let i = 0; i < s.length; i++) {        
        // во вложенном цикле перебираем от 0 до сокращающейся на каждой итерации на единицу длину строки
        for(let j = 0; j < s.length - i; j++) {
            // console.log(i,j, j+i+1);
            // записываем в массив все варианты подстрок
            let subString = s.substring(j, j + i + 1);
            // console.log(subString);
            // записываем в массив палидромы - строки, которые при реверсе пишутся также и не дублируют друг друга
            if(isPalindrome(subString, subStrings)) {
                subStrings.push(subString);
            }
        }
    }
    // выводим в консоль самое длинную строку
    console.log(subStrings.reduce((a, b) => (b.length > a.length) ? b : a));
}

findLongestPalindrome("fffkffgffkfdk");
findLongestPalindrome("абвгоогвфф");


