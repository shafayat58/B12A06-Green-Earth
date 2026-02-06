# Green Earth Project
1) What is the difference between var, let, and const?

Ans:

var → function-scoped, can redeclare, can reassign.

let → block-scoped, cannot redeclare, can reassign.

const → block-scoped, cannot redeclare, cannot reassign.

2) What is the difference between map(), forEach(), and filter()?


Ans:

forEach() → loops, no return.

map() → loops, returns new array.

filter() → loops, returns new array with elements passing condition.

 3) What are arrow functions in ES6?

 Ans:

const add = (a, b) => a + b;
console.log(add(2, 3));




4) How does destructuring assignment work in ES6?

Array: const [a,b] = [1, 2]

Object: const {name, age} = person

5) 5) Explain template literals in ES6. How are they different from string concatenation?

Ans:

Use backticks ` for strings.

Can put variables inside with ${ }.

Can write multi-line text easily.

Example:

const animal = "Lion";
const age = 25;
const output = `My name is ${animal} and I am ${age} years old.`;

console.log(output);
