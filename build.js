"use strict";

// Zadanie 1
console.log('ZADANIE 1');

var a = "Hello";
var b = "World!";
console.log(a + ", " + b);

// Zadanie 2 

console.log('ZADANIE 2');

var multiply = function multiply() {
  var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return console.log("Wynik mno\u017Cenia: " + x + " x " + y + " = " + x * y);
};
multiply(2, 5); // 10
multiply(6, 6); // 36
multiply(5); // 5


// Zadanie 3 

console.log('ZADANIE 3');

var average = function average() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return console.log(args.reduce(function (a, b) {
    return a + b;
  }) / args.length);
};
average(1); // 1
average(1, 3); // 2
average(1, 3, 6, 6); // 4

//Zadanie 4 

console.log('ZADANIE 4');

var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(average.apply(undefined, grades));

// Zadanie 5 

console.log('ZADANIE 5');

var data = [1, 4, 'Iwona', false, 'Nowak'];
var firstName = data[2],
    lastName = data[4];

console.log(firstName + " " + lastName);
