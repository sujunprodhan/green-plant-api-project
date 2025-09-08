# JavaScript ES6 Concepts

This README explains some of the most important ES6 concepts in JavaScript with simple answers and examples.

---

## 1. What is the difference between `var`, `let`, and `const`?

**Answer:**  
New features came out with ES2015 (ES6). ES6 added `let`, `var`, and `const`, which can be used for variable declaration.  

- **var** → Old way, function-scoped, can be redeclared and reassigned.  
- **let** → Modern way, block-scoped, can be reassigned but not redeclared.  
- **const** → Block-scoped, cannot be redeclared or reassigned (constant).  

✅ Use **let** when the value will change  
✅ Use **const** when the value should stay the same  
❌ Avoid **var** in modern JavaScript  

**Example:**
```js
var x = 10;
var x = 20; // allowed
console.log(x); // 20

let y = 30;
// let y = 40; ❌ not allowed
y = 40; // ✅ reassignment allowed
console.log(y); // 40

const z = 50;
// z = 60; ❌ not allowed
console.log(z); // 50
```

## 2. What is the difference between `map()`, `forEach()`, and `filter()`?

**Answer:**  
The `forEach()`, `map()`, and `filter()` methods in JavaScript are used to iterate over arrays, but they serve different purposes.  

- **forEach()** → Iterates over array elements, executing a specified function once for each element. Does not return a new array.  
- **map()** → Creates a new array by applying a function to each element of the original array. Returns a transformed array.  
- **filter()** → Creates a new array containing only the elements for which the function returns `true`.  

**Example:**
```js
```
const numbers = [1, 2, 3, 4, 5];

// forEach()
numbers.forEach(num => console.log(num * 2)); // Logs 2, 4, 6, 8, 10

// map()
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// filter()
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // [2, 4]
```
```
## 3. What are arrow functions in ES6?
Answer: ES6 Arrow functions enable us to write functions with simpler and shorter syntax and make our code more readable and organised. The arrow functions are introduced in the ES6 version.
```
```
// Traditional function
function add(a, b) {
  return a + b;
}

// Arrow function
const addArrow = (a, b) => a + b;

console.log(add(5, 3));     // 8
console.log(addArrow(5, 3)); // 8

## 4. How does destructuring assignment work in ES6?
Answer: Array destructuring allows us to extract values from an array and assign them to variables without needing to use the array’s index.
```
```
// Array destructuring
const numbers = [10, 20, 30];
const [a, b, c] = numbers;
console.log(a); // 10
console.log(b); // 20
console.log(c); // 30

// Object destructuring
const person = { name: "Alice", age: 25 };
const { name, age } = person;
console.log(name); // Alice
console.log(age);  // 25


## 5. Explain template literals in ES6. How are they different from string concatenation?
Answer: Template literals are a new feature that was introduced in ECMAScript6, this offers a simple method for performing string interpolation and multiline string creation. The template literals were called template strings before the introduction of ES6.
```
```
const name = "Alice";
const age = 25;

// Traditional concatenation
console.log("My name is " + name + " and I am " + age + " years old.");

// Template literal
console.log(`My name is ${name} and I am ${age} years old.`);

// Multi-line template literal
const multiLine = `
This is a string
that spans multiple lines
using template literals.
`;

console.log(multiLine);

```
```
