# JavaScript ES6 Concepts

This README explains some of the most important ES6 concepts in JavaScript with simple answers.

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

---

## 2. What is the difference between `map()`, `forEach()`, and `filter()`?

**Answer:**  
The `forEach()` and `map()` methods in JavaScript are used to iterate over arrays, but they serve different purposes.  

- **forEach()** → Iterates over array elements, executing a specified function once for each element in the array.  
- **map()** → Creates a new array by applying a specified function to each element of the original array. It returns a new array with the transformed values.  
- **filter()** → Applies a function to each element and keeps only those for which the function returns `true`.  

---

## 3. What are arrow functions in ES6?

**Answer:**  
ES6 arrow functions enable us to write functions with simpler and shorter syntax and make our code more readable and organized.  
The arrow functions were introduced in the ES6 version.  

---

## 4. How does destructuring assignment work in ES6?

**Answer:**  
Array destructuring allows us to extract values from an array and assign them to variables without needing to use the array’s index.  

---

## 5. Explain template literals in ES6. How are they different from string concatenation?

**Answer:**  
Template literals are a new feature that was introduced in ECMAScript 6.  
They offer a simple method for performing **string interpolation** and **multiline string creation**.  

The template literals were called *template strings* before the introduction of ES6.  

---
