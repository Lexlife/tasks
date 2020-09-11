/*
Напишите программу, которая выводит на экран числа от 1 до 100. При этом вместо чисел, кратных трем, программа должна выводить слово Fizz, а вместо чисел, кратных пяти — слово Buzz. Если число кратно пятнадцати, то программа должна выводить слово FizzBuzz
*/

function FizzBuzz(num) {
  for (let item = 1; item <= num; item += 1) {

    if (item % 3 === 0 && item % 5 === 0) {
      console.log('FizzBuzz');

    } else if (item % 3 === 0) {
      console.log('Fizz');

    } else if (item % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(item);
    }
  }
}
FizzBuzz(100);