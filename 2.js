/* В високосный год день программиста в России отмечается 12 сентября, а в невисокосный - 13 сентября. С учетом этого, напишите функцию, которая принимает в качестве параметра год (в котором необходимо определить день программиста), а на выходе выводит день программиста с указанием дня недели.*/

// Версия 0 (требует доработки)

function getDayProgrammer(year) {
  if (new Date(year, 1, 29).getMonth() === 1) {
    let dayProgrammer = `В ${year} году день программиста отмечается 12 сентября!`;
    return dayProgrammer;
  } else {
    let dayProgrammer = `В ${year} году день программиста отмечается 13 сентября!`;
    return dayProgrammer;
  }
}
console.log(getDayProgrammer(2020));
// Версия 1 (требует доработки)
function getDayProgrammer(year = 2024) {

  let leap = new Date(year, 1, 29).getMonth();

  if (leap === 1) {
    let dayProgrammer = `${year}, 9, 12`;
    return dayProgrammer;
  } else {
    let dayProgrammer = `${year}, 9, 13`;
    return dayProgrammer;
  }
}
let result = getDayProgrammer(2021);

function getWeekDay(date) {
  const days = ['воскресенье', 'понедельник', 'вторник', 'среду', 'четверг', 'пятницу', 'субботу'];
  return days[date.getDay()];
}

let date = new Date(result);
let result2 = getWeekDay(date);
let arr1 = result.split(',');
arr1.reverse();
let arr2 = result2.split(',');

let itog = `День программиста в России в ${arr1[2]} году отмечается в ${arr2}${arr1[0]} сентября!`;
console.log(itog);

