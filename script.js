// 1. Напишіть функцію, що повертає куб числа.
// function cube(number) {
//   return Math.pow(number, 3)
// }
//
// console.log(cube(3));
//



// 2. Напишіть функцію, що додає перше число до другого і ділить результат на третє число.
// function mathOperations(a, b, c) {
//     return (a + b) / c;
// }
//
// console.log(mathOperations(1,2,3));



// 3. Напишіть функцію, що приймає число від 1 до 7 і повертає відповідну назву дня (українською).
//
// function dayOfWeek(day) {
//   switch (day) {
//     case 1:
//       alert("Понеділок");
//       break;
//     case 2:
//       alert("Вівторок");
//       break;
//     case 3:
//       alert("Середа");
//       break;
//     case 4:
//       alert("Четвер");
//       break;
//     case 5:
//       alert("П'ятниця");
//       break;
//     case 6:
//       alert("Субота");
//       break;
//     case 7:
//       alert("Неділя")
//       break;
//     default:
//       alert('Потрібно ввести в діапазоні від 1 до 7');
//   }
// return day;
// }
//
// console.log(dayOfWeek(4));



// 4. Реалізуйте функцію знаходження факторіала
// function factorial(x) {
//   let result = 1;
//   while(x) {
//     result *= x--;
//   }
//   return result;
// }
// console.log( factorial(3) );



// 5.  Напишіть функцію яка отримує години хвилини та секунди і повертає це число в секундах.
// let result;
// const translate = 60;
// function getTime(hours, minutes, seconds) {
//   result = (hours * Math.pow(translate, 2)) + (minutes * translate) + seconds;
//   return result;
// }
// console.log(timeGet(3,20,50))


// 6.    Написати функцію , яка приймає секунди, і перетворює їх у години хвилини та секунди у форматі «гг:хх:сс». якщо кількість годин більша за 23.59.59 - вивести повідомлення "Більше одного дня".
// let days, hours, minutes, result;
// const translate = 60, day = 24;
// function time(seconds)
// {
//   days = Math.floor(seconds / (day* (translate**2)));
//   if(days >= 1) {
//     console.log('Більше одного дня');
//     return days;
//   } else {
//     seconds -= days * (day* (translate**2));
//     hours = Math.floor(seconds / (translate**2));
//     seconds -= hours * (translate**2);
//     minutes = Math.floor(seconds / translate);
//     seconds -= minutes * translate;
//     return result = `${hours}:${minutes}:${seconds}`;
//   }
// }
// console.log(time(86399));



// 7. 4 відмінності ерров фанкшина від звичайної функції.

// 1) Синтаксис написання (arg1, arg2, .. argN) => expression;
// 2) В ерров фанкшин можна не писати return. (arg1, arg2, .. argN) => arg1+arg2;
// 3) Ерров фанкшин не мають власного this
// 4) Ерров фанкшин не можуть бути використані для створення об'єктів
