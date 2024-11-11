<!-- strong and emphasize tag alt tag in img(it should be related to the img) is preffered for seo
swayam and aicte for internship and certification -->


# Front-End Notes

## 11 November 2024

<!-- ================================================================================================ -->


# DataTypes in Js

**Data Types in JavaScript** JavaScript has **7 primitive data types**  and **1 non-primitive (reference) data type**.

**1. Number** 
- Represents numeric values (both integers and floating-point numbers).
- Includes special values like `NaN` (Not-a-Number) and `Infinity`.

**Example:** 

```js
let age = 25;         // Integer
let price = 99.99;    // Float
let result = NaN;     // Not-a-Number
let bigNum = Infinity; // Infinity
```
**2. String**  
- Represents textual data enclosed in single (`' '`), double (`" "`), or backticks (`` ``).

- Strings are immutable.
**Example:** 

```js
let name = "John";
let greeting = 'Hello, World!';
let template = `This is a template string with ${name}`;
```
**3. Boolean**  
- Represents logical values: `true` or `false`.

- Often used in conditional statements.
**Example:** 

```js
let isActive = true;
let isComplete = false;
```
**4. Undefined**  
- A variable that has been declared but not assigned a value is of type `undefined`.

**Example:** 

```js
let user;
console.log(user); // Output: undefined
```
**5. Null** 
- Represents the intentional absence of any object value.
 
- It is different from `undefined` (which means a variable has been declared but not yet assigned).
**Example:** 

```js
let emptyValue = null;
console.log(emptyValue); // Output: null
```
**6. Symbol (ES6)** 
- Represents a unique and immutable value.

- Often used for object property keys to avoid conflicts.
**Example:** 

```js
let symbol1 = Symbol('description');
let symbol2 = Symbol('description');
console.log(symbol1 === symbol2); // Output: false
```
**7. BigInt (ES11)**  
- Used to represent integers that are too large to be represented by the `Number` type.
 
- Created by appending `n` to the end of an integer.
**Example:** 

```js
let bigNumber = 123456789012345678901234567890n;
console.log(bigNumber + 1n); // Output: 123456789012345678901234567891n
```
**8. Object (Non-Primitive)** 
- A complex data type used to store collections of data or more complex entities.

- Includes arrays, functions, and objects.
**Example:** 

```js
let person = {
    name: "Alice",
    age: 30,
    isStudent: false
};

let array = [1, 2, 3, 4];
let func = function() {
    return "Hello, World!";
};
```
**Summary Table**

| Data Type | Description | Example | 
| --- | --- | --- | 
| Number | Numeric values (integers, floats) | let num = 42; | 
| String | Sequence of characters | let str = "Hello"; | 
| Boolean | Logical values: true or false | let isTrue = true; | 
| Undefined | Variable declared but not assigned | let x; | 
| Null | Represents "no value" | let y = null; | 
| Symbol | Unique and immutable identifier | let sym = Symbol('id'); | 
| BigInt | Large integers beyond Number limits | let big = 123n; | 
| Object | Collection of key-value pairs | let obj = { key: 'value' }; | 





<!-- ================================================================== -->

# Conditional Statements and Loops: 

A comprehensive overview of **Conditional Statements**  and **Loops**  in a structured manner, covering concepts applicable across popular programming languages like Python, Java, C++, and JavaScript.

**`Conditional Statements`** - Conditional statements help control the flow of a program based on certain conditions. The main types of conditional statements are

1. If Statement
2. If-Else Statement
3. Else-If Ladder
4. Switch-Case Statements

1. **If Statement**  
- The `if` statement checks a condition and executes a block of code if the condition is true.

**Syntax:** 

```js
// JavaScript
if (condition) {
    // code to execute if condition is true
}
```
**Example:** 

```javascript
let x = 10;
if (x > 5) {
    console.log("x is greater than 5");
}
```

2. **If-Else Statement**  
- The `if-else` statement checks a condition and executes one block of code if the condition is true and another block if it is false.

**Syntax:** 

```javascript
if (condition) {
    // code if true
} else {
    // code if false
}
```

3. **Else-If Ladder (if-else if-else)** 
- This structure allows multiple conditions to be checked sequentially.

**Syntax:**

```js
let score = 85;
if (score >= 90) {
    console.log("Grade A");
} else if (score >= 80) {
    console.log("Grade B");
} else {
    console.log("Grade C");
}
```
4. **Switch Case**  
- The `switch` statement is used to execute one block of code among many alternatives based on the value of a variable.
**Syntax:** 

```javascript
switch (expression) {
    case value1:
        // Code block for value1
        break;
    case value2:
        // Code block for value2
        break;
    case value3:
        // Code block for value3
        break;
    default:
        // Code block if no case matches
}
```

```java
switch (variable) {
    case value1:
        // code block
        break;
    case value2:
        // code block
        break;
    default:
        // code block
}
```
**Example:** 

```cpp
char grade = 'B';
switch (grade) {
    case 'A':
        cout << "Excellent";
        break;
    case 'B':
        cout << "Good";
        break;
    default:
        cout << "Invalid grade";
}
```
<!-- =========================================================================== -->

**`Loops`** : In JavaScript, there are **5 main types of loops** , each with a specific use case:

1. For Loops
2. While Loops
3. Do-While Loops
4. For-in Loops
5. For-Of

1. **For Loop**  
- The `for` loop is used when the number of iterations is known beforehand.

**Syntax:** 

```js
for (initialization; condition; increment/decrement) {
    // code to be executed
}
```
**Example:** 

```js
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```
**Output:** 

```
0
1
2
3
4
```
2. **While Loop**  

- The `while` loop executes a block of code as long as the specified condition is true.

**Syntax:** 

```js
while (condition) {
    // code to be executed
}
```
**Example:** 

```js
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
```
**Output:** 

```
0
1
2
3
4
```
3. **Do-While Loop**  
- The `do-while` loop is similar to the `while` loop, but it guarantees at least one execution of the loop body before checking the condition.
**Syntax:** 

```js
do {
    // code to be executed
} while (condition);
```
**Example:** 

```js
let i = 0;
do {
    console.log(i);
    i++;
} while (i < 5);
```
**Output:** 

```
0
1
2
3
4
```
4. **For-In Loop**  
- The `for-in` loop is used to iterate over the properties (keys) of an object.
**Syntax:** 

```js
for (let key in object) {
    // code to be executed
}
```
**Example:** 

```js
const person = { name: "John", age: 30 };
for (let key in person) {
    console.log(key + ": " + person[key]);
}
```
**Output:** 

```makefile
name: John
age: 30
```
5. **For-Of Loop**  
- The `for-of` loop is used to iterate over iterable objects like arrays, strings, or sets.
**Syntax:** 

```js
for (let element of iterable) {
    // code to be executed
}
```
**Example:** 

```js
const numbers = [1, 2, 3];
for (let num of numbers) {
    console.log(num);
}
```
**Output:** 

```
1
2
3
```
**Summary of JavaScript Loops**

 | Loop Type | Use Case | 
| --- | --- | 
| For | When the number of iterations is known. | 
| While | When the number of iterations is unknown. | 
| Do-While | When you need to execute at least once. | 
| For-In | To iterate over object properties (keys). | 
| For-Of | To iterate over iterable objects (arrays, strings). | 



<!-- ================================================================================================ -->


# Arrays

An **array** is a special type of object in JavaScript that allows you to store multiple values in a single variable. It can hold different data types (numbers, strings, objects, etc.).

#### **Array Declaration:**
```js
// Using square brackets (recommended)
let fruits = ["Apple", "Banana", "Mango"];

// Using the Array constructor
let numbers = new Array(1, 2, 3, 4);
```

#### **Accessing Array Elements:**
- Use **indexing** to access elements. Array indices start from **0**.
```js
console.log(fruits[0]); // Output: Apple
console.log(fruits[2]); // Output: Mango
```

#### **Modifying Array Elements:**
```js
fruits[1] = "Orange";
console.log(fruits); // Output: ["Apple", "Orange", "Mango"]
```

### **Popular Array Methods in JavaScript**

#### **1. `push()`**
- Adds one or more elements to the **end** of an array.
```js
fruits.push("Grapes");
console.log(fruits); // Output: ["Apple", "Orange", "Mango", "Grapes"]
```

#### **2. `pop()`**
- Removes the **last** element from an array.
```js
let lastFruit = fruits.pop();
console.log(lastFruit); // Output: Grapes
console.log(fruits);    // Output: ["Apple", "Orange", "Mango"]
```

#### **3. `shift()`**
- Removes the **first** element from an array.
```js
let firstFruit = fruits.shift();
console.log(firstFruit); // Output: Apple
console.log(fruits);     // Output: ["Orange", "Mango"]
```

#### **4. `unshift()`**
- Adds one or more elements to the **beginning** of an array.
```js
fruits.unshift("Strawberry");
console.log(fruits); // Output: ["Strawberry", "Orange", "Mango"]
```

#### **5. `splice()`**
- Adds, removes, or replaces elements in an array.
```js
// Remove 1 element at index 1
fruits.splice(1, 1);
console.log(fruits); // Output: ["Strawberry", "Mango"]

// Add elements at index 1
fruits.splice(1, 0, "Peach", "Pineapple");
console.log(fruits); // Output: ["Strawberry", "Peach", "Pineapple", "Mango"]
```

#### **6. `slice()`**
- Returns a shallow copy of a portion of an array.
```js
let slicedFruits = fruits.slice(1, 3);
console.log(slicedFruits); // Output: ["Peach", "Pineapple"]
```

#### **7. `concat()`**
- Merges two or more arrays.
```js
let moreFruits = ["Kiwi", "Watermelon"];
let allFruits = fruits.concat(moreFruits);
console.log(allFruits); // Output: ["Strawberry", "Peach", "Pineapple", "Mango", "Kiwi", "Watermelon"]
```

#### **8. `indexOf()`**
- Returns the **index** of the first occurrence of a specified element.
```js
let index = fruits.indexOf("Mango");
console.log(index); // Output: 3
```

#### **9. `includes()`**
- Checks if an array contains a specified element.
```js
let hasPeach = fruits.includes("Peach");
console.log(hasPeach); // Output: true
```

#### **10. `map()`**
- Creates a new array by applying a function to each element.
```js
let numbers = [1, 2, 3, 4];
let squares = numbers.map(num => num * num);
console.log(squares); // Output: [1, 4, 9, 16]
```

#### **11. `filter()`**
- Creates a new array with elements that pass a test.
```js
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]
```

#### **12. `reduce()`**
- Reduces an array to a single value by applying a function.
```js
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // Output: 10
```

### **Summary Table of Array Methods**

| Method     | Description                         |
|------------|-------------------------------------|
| `push()`   | Adds element(s) to the end          |
| `pop()`    | Removes the last element            |
| `shift()`  | Removes the first element           |
| `unshift()`| Adds element(s) to the beginning    |
| `splice()` | Adds/removes elements               |
| `slice()`  | Returns a portion of an array       |
| `concat()` | Merges arrays                       |
| `indexOf()`| Finds the index of an element       |
| `includes()`| Checks if element is in array      |
| `map()`    | Transforms each element             |
| `filter()` | Filters elements based on condition |
| `reduce()` | Reduces array to single value       |