// alert('some word');
// console.log('Some word');

// var a = 10;
// var a = "10";
// var a = false;
// var a;
// var a = null; !!!
// var a = {};
// var a = function() {}

// console.log(typeof a);


// var a = 'sdfsdf';
// var b = 20;

// console.log(a + b);



// var img = '20.png';

// var template = '<img src="./img/' + img + '" alt="">';
// console.log(template);


// var a = '10';
// var b = '20';
// console.log(+a + +b);


// var a = 10;
// // a = a + 1;
// // a += 1;
// console.log(a);
// // console.log(a++);
// // console.log(++a);
// // console.log(a--);
// // console.log(--a);
// console.log(a);



// var a = '10';
// var b = '11';
// var c = a > b;
// var c = a >= b;
// var c = a == b;
// var c = a === +b;
// console.log(c);

// &&
// 0 0 0
// 0 1 0
// 1 0 0
// 1 1 1

// ||
// 0 0 0
// 0 1 1
// 1 0 1
// 1 1 1



// var x = confirm('Точно ?');
// var x = prompt('???');
// console.log(x);

// document.write('<h1>Hello!</h1>');

//____________________________________
// false - false, 0, '', null, undefined, NaN

// var x = confirm('??');

// if (!x) {
//   console.log('OK');
// } else {
//   console.log('NE OK');
// }

// var a = 20;
// var b = 10;
// console.log(a == b);
// console.log(a != b);

// console.log(a === b);
// console.log(a !== b);


// var a = 10;
// var b = true;
// console.log(!!a === b);



// var a = prompt('Day?');

// if (+a === 1) {
//   console.log('Mon');
// } else if (+a === 2) {
//   console.log('Tue');
// } else if (+a === 3) {
//   console.log('Wed');
// } else if (+a === 4) {
//   console.log('Thu');
// } else if (+a === 5) {
//   console.log('Fri');
// } else {
//   console.log('ERROR');
// }

// var memory = prompt('Memory ??');
// var price = 0;
// var message = '';

// if (memory === null) {
//   message = 'Пока!';
// } else if (+memory === 64) {
//   price = 300;
// } else if (+memory === 128) {
//   price = 500;
// } else if (+memory === 256) {
//   price = 700;
// } else {
//   message = 'Такой памяти нет!';
// }

// if (price) {
//   document.write('<h1>Price: ' + price + '$</h1>');
// }
// if (message && !price) {
//   document.write('<h1 style="color: red">' + message + '</h1>');
// }


// if (true) {
//   var a = 10;
// }
// console.log(a);


// console.log(a);
// var a = 10;


// 'use strict';
// a = 10;
// console.log(a);


// var memory = prompt('Memory ??');
// var price = 0;
// var message = '';

// if (memory === null) {
//   message = 'Пока!';
// } else if (+memory === 64) {
//   price = 300;
// } else if (+memory === 128) {
//   price = 500;
// } else if (+memory === 256) {
//   price = 700;
// } else {
//   message = 'Такой памяти нет!';
// }

// if (price) {
//   document.write('<h1>Price: ' + price + '$</h1>');
// }
// if (message && !price) {
//   document.write('<h1 style="color: red">' + message + '</h1>');
// }


// var a = 0;
// while (a < 10) {
//   console.log(a);
//   a++;
// }
// console.log('!!!');


// var memory;
// var price = 0;
// var message = '';


// while (true) {
//   memory = prompt('Memory ??');
//   if (memory === null) {
//     message = 'Пока!';
//     break;
//   } else if (+memory === 64) {
//     price = 300;
//     break;
//   } else if (+memory === 128) {
//     price = 500;
//     break;
//   } else if (+memory === 256) {
//     price = 700;
//     break;
//   } else {
//     alert('Попробуйте снова!')
//   }
// }


// if (price) {
//   document.write('<h1>Price: ' + price + '$</h1>');
// }
// if (message && !price) {
//   document.write('<h1 style="color: red">' + message + '</h1>');
// }

// var a = 0;
// while (a < 10) {
//   a++;
//   if (a === 5) {
//     continue;
//   }
//   console.log(a);
// }

// var a = 0;
// while (a < 10) {
//   console.log(a);
//   a++;
// }


// for (var i = 0; i < 10; i++) {
//   console.log(i);
// }

// console.log(i);


// var arr = ['qwerty', 234, true];
// // var arr2 = new Array('qwerty', 234, true);
// var arr2 = new Array(5);

// arr[100] = 78654;
// arr[1] = 'NEW';
// arr[100] = 'NEW';
// console.log(arr);
// console.log(arr2);


// var arr = ['qwerty', 234, true, 345, 'fdg', 56, 3, 34, 5];

// for (var i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// var user = ['Bob', 43, 'nbob@gmail.com', 42];



// var arr = new Array(5);

// for (var i = 0; i < arr.length; i++) {
//   arr[i] = new Array(5);
//   for (var j = 0; j < arr[i].length; j++) {
//     arr[i][j] = 0;
//   }
// }
// console.log(arr);


// Home Tasks
// 1) Switch case. Тернарные выражения
// 2) Спрашивать у пользователя цвет телефона и выводить кратинку соответствующую этому цвету (обратить внимание на то, что пользователь имеет возможность ввести цвет только тогда, когда выбрал память). Попробуйте использовать массивы

// Так нельзя !!!
// var color = prompt('COlor??');
// document.write('<img src="' + color + '.png">')