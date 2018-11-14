// Zadanie 1
console.log('ZADANIE 1');

const a = "Hello";
const b = "World!";
console.log(`${a}, ${b}`);

// Zadanie 2 

console.log('ZADANIE 2');

const multiply = (x = 1, y = 1) => (`Wynik mnożenia: ${x} x ${y} = ${x * y}`);
console.log(multiply(2, 5)) // 10
console.log(multiply(6, 6)) // 36
console.log(multiply(5)) // 5


// Zadanie 3 

console.log('ZADANIE 3');

const average = (...args) => (args.reduce((a, b) => a + b)/args.length);
console.log(average(1)) // 1
console.log(average(1, 3)) // 2
console.log(average(1, 3, 6, 6)) // 4

//Zadanie 4 

console.log('ZADANIE 4');

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(average(...grades));

// Zadanie 5 

console.log('ZADANIE 5');

const data = [1, 4, 'Iwona', false, 'Nowak'];
const [ , , firstName, , lastName] = data;
console.log(`${firstName} ${lastName}`);