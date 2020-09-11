/*
Задача: Необходимо вывести из массива только четные числа.
*/

const array = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711];

function getEvenNumber(array) {
  const newArray = [];
    for (item = 0; item < array.length; item +=1 ) {
    if (array[item] % 2 === 0) {
      newArray.push(array[item]);
    }
  }
  return newArray;
}
console.log(getEvenNumber(array));
