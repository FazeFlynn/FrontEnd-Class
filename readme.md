<!-- strong and emphasize tag alt tag in img(it should be related to the img) is preffered for seo
swayam and aicte for internship and certification -->


# Front-End Notes

## 11 November 2024

<!-- ================================================================================================ -->


# DataTypes in Js

There are 8 main datatypes in Js

- 1.Number
- 2.String
- 3.Boolean
- 4.Undefined
- 5.Null
- 6.Symbol (ES6)
- 7.BigInt (ES11)
- 8.Object (Non Primitive)


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

<!-- <details>

<summary>Heirarchy of DataTypes in Js</summary> -->

```javascript
JavaScript Data Types
├── 1. Primitive Data Types
│   ├── a. Number
│   ├── b. BigInt
│   ├── c. String
│   ├── d. Boolean
│   ├── e. Undefined
│   ├── f. Null
│   └── g. Symbol
└── 2. Non-Primitive (Reference) Data Types
    ├── a. Object
    │   ├── i. Array
    │   ├── ii. Function
    │   ├── iii. Date
    │   ├── iv. RegExp
    │   └── v. Error
    └── b. Map and WeakMap
        └── i. Set and WeakSet
```

<!-- </details> -->



<!-- ================================================================== -->


---


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

---


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


---

# **Hoisting in JavaScript**

**Hoisting** is a JavaScript behavior where variable and function declarations are **moved to the top of their containing scope** (global or local) during the compilation phase, before the code is executed.

#### **1. Variable Hoisting**
- Variables declared using `var` are **hoisted**, but only their declarations, not the assignments.
- Variables declared with `let` and `const` are **hoisted** but are placed in a **"temporal dead zone" (TDZ)** until they are initialized, making them inaccessible before their declaration.

**Example with `var`:**
```js
console.log(x); // Output: undefined (declaration hoisted, value not assigned)
var x = 5;
console.log(x); // Output: 5
```

**Example with `let`/`const`:**
```js
console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 10;
```

#### **2. Function Hoisting**
- Function declarations are **fully hoisted**, meaning you can call the function even before it is defined in the code.
- Function expressions (using `var`, `let`, or `const`) are **not hoisted**.

**Example of Function Declaration:**
```js
sayHello(); // Output: Hello!
function sayHello() {
    console.log("Hello!");
}
```

**Example of Function Expression:**
```js
greet(); // TypeError: greet is not a function
var greet = function() {
    console.log("Hi!");
};
```

### **Summary of Hoisting in JavaScript**

| Type                | Hoisted | Accessible Before Declaration | Initialization |
|---------------------|---------|-------------------------------|----------------|
| **`var` variable**  | Yes     | Yes (value: `undefined`)      | No             |
| **`let`/`const` variable** | Yes     | No (TDZ error)                | No             |
| **Function declaration**   | Yes     | Yes                           | Yes            |
| **Function expression**    | No      | No (treated as a variable)    | No             |

---


# Objects in Javascript

In JavaScript, an **object** is a collection of **key-value pairs** where the keys are called **properties** and the values can be any data type (string, number, boolean, array, function, or another object). Objects are used to store and manage structured data.

#### **Creating Objects:**

1. **Using Object Literal:**
```js
const person = {
    name: "John",
    age: 30,
    isStudent: false,
    greet: function() {
        console.log("Hello!");
    }
};
```

2. **Using Constructor Function:**
```js
function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

const myCar = new Car("Toyota", "Corolla");
```

3. **Using `Object.create()`:**
```js
const prototypeObj = { type: "vehicle" };
const car = Object.create(prototypeObj);
car.brand = "Honda";
```

4. **Using `new Object()`:**
```js
const obj = new Object();
obj.name = "Alice";
obj.age = 25;
```

### **Accessing Object Properties:**

- **Dot Notation:** `object.property`
- **Bracket Notation:** `object["property"]`

**Example:**
```js
console.log(person.name);       // Output: John
console.log(person["age"]);     // Output: 30
```

### **Popular Object Methods and Properties:**

#### **1. `Object.keys()`**
- Returns an array of the object's own enumerable property names.
```js
const keys = Object.keys(person);
console.log(keys); // Output: ["name", "age", "isStudent", "greet"]
```

#### **2. `Object.values()`**
- Returns an array of the object's own enumerable property values.
```js
const values = Object.values(person);
console.log(values); // Output: ["John", 30, false, function]
```

#### **3. `Object.entries()`**
- Returns an array of key-value pairs.
```js
const entries = Object.entries(person);
console.log(entries); // Output: [["name", "John"], ["age", 30], ["isStudent", false]]
```

#### **4. `Object.assign()`**
- Copies properties from one or more source objects to a target object.
```js
const target = { a: 1 };
const source = { b: 2, c: 3 };
Object.assign(target, source);
console.log(target); // Output: { a: 1, b: 2, c: 3 }
```

#### **5. `Object.freeze()`**
- Makes an object **immutable**, preventing any changes.
```js
const obj = { name: "Tom" };
Object.freeze(obj);
obj.name = "Jerry"; // This will not change the object
console.log(obj.name); // Output: Tom
```

#### **6. `Object.seal()`**
- Prevents adding or removing properties but allows modification of existing properties.
```js
const user = { username: "admin" };
Object.seal(user);
user.username = "guest";  // Allowed
user.password = "12345";  // Ignored
console.log(user);        // Output: { username: "guest" }
```

#### **7. `hasOwnProperty()`**
- Checks if the object has a specific property.
```js
console.log(person.hasOwnProperty("name")); // Output: true
console.log(person.hasOwnProperty("address")); // Output: false
```

#### **8. `Object.prototype.toString()`**
- Returns a string representation of the object.
```js
console.log(person.toString()); // Output: "[object Object]"
```

### **Summary Table of Popular Object Methods**

| Method               | Description                              |
|----------------------|------------------------------------------|
| `Object.keys()`      | Returns an array of property names       |
| `Object.values()`    | Returns an array of property values      |
| `Object.entries()`   | Returns an array of key-value pairs      |
| `Object.assign()`    | Copies properties to a target object     |
| `Object.freeze()`    | Makes an object immutable                |
| `Object.seal()`      | Prevents adding/removing properties      |
| `hasOwnProperty()`   | Checks if the object has a property      |
| `toString()`         | Returns string representation of object  |

---

# Array and Object Destructuring

### **Array Destructuring**

**Array destructuring** allows you to unpack values from an array into distinct variables in a concise way.

#### **Example 1: Simple Array Destructuring**
```js
let fruits = ["Apple", "Banana", "Mango"];

// Destructuring the array
let [first, second, third] = fruits;

console.log(first);  // Output: Apple
console.log(second); // Output: Banana
console.log(third);  // Output: Mango
```

#### **Example 2: Skipping Elements in Array Destructuring**
```js
let colors = ["Red", "Green", "Blue"];

// Skipping the second element
let [firstColor, , thirdColor] = colors;

console.log(firstColor); // Output: Red
console.log(thirdColor); // Output: Blue
```

#### **Example 3: Default Values in Array Destructuring**
```js
let numbers = [1];

// Destructuring with a default value
let [a, b = 10] = numbers;

console.log(a); // Output: 1
console.log(b); // Output: 10 (default value)
```

---

### **Object Destructuring**

**Object destructuring** allows you to unpack properties from an object into variables in a concise way.

#### **Example 1: Simple Object Destructuring**
```js
let person = { name: "John", age: 30 };

// Destructuring the object
let { name, age } = person;

console.log(name); // Output: John
console.log(age);  // Output: 30
```

#### **Example 2: Renaming Variables in Object Destructuring**
```js
let person = { name: "Alice", age: 25 };

// Renaming the variables during destructuring
let { name: fullName, age: yearsOld } = person;

console.log(fullName);  // Output: Alice
console.log(yearsOld);  // Output: 25
```

#### **Example 3: Default Values in Object Destructuring**
```js
let person = { name: "Bob" };

// Providing a default value for a missing property
let { name, age = 40 } = person;

console.log(name); // Output: Bob
console.log(age);  // Output: 40 (default value)
```

#### **Example 4: Nested Object Destructuring**
```js
let user = {
  name: "Jane",
  address: { city: "New York", zip: "10001" }
};

// Destructuring nested objects
let { name, address: { city, zip } } = user;

console.log(name);  // Output: Jane
console.log(city);  // Output: New York
console.log(zip);   // Output: 10001
```

### **Summary**

- **Array Destructuring**: Allows you to extract values from arrays into variables.
- **Object Destructuring**: Allows you to extract properties from objects into variables.
- **Default Values**: You can provide default values for missing values during destructuring.
- **Renaming**: You can rename variables during destructuring by using a colon (`:`).

These examples cover some of the most common use cases of destructuring in JavaScript. Let me know if you need further clarification or additional examples!

---

# Funtions

Functions in JavaScript are blocks of reusable code designed to perform a particular task. Functions can take inputs (parameters), perform operations, and return outputs (values).

### **1. Declaring Functions**

There are multiple ways to declare functions in JavaScript. Let's go through each method in detail:

### Types of functions:

1. Function Declaration
2. Function Expression
3. Arrow Function
4. Anonymous Function
5. Named Function
6. Immediately Invoked Function Expression (IIFE)
7. Constructor Function
8. Higher-Order Function
9. Callback Function
10. Recursive Function
11. Generator Function
12. Async Function
13. Pure Function
14. Impure Function

#### **1.1. Function Declaration (Function Statement)**

This is the most common way to declare a function. It’s hoisted, meaning the function can be called before it’s defined.

```js
// Function declaration
function greet() {
  console.log("Hello, world!");
}

greet();  // Output: Hello, world!
```

#### **1.2. Function Expression**

A function expression assigns a function to a variable. Unlike function declarations, function expressions are **not hoisted**.

```js
// Function expression
const greet = function() {
  console.log("Hello, world!");
};

greet();  // Output: Hello, world!
```

#### **1.3. Arrow Function**

Arrow functions are a more concise way to write functions, introduced in ES6. They are also known as **lambda functions** in other programming languages. Arrow functions do not have their own `this`, `arguments`, or `super`.

```js
// Arrow function
const greet = () => {
  console.log("Hello, world!");
};

greet();  // Output: Hello, world!
```

For one-line functions, the curly braces and `return` keyword can be omitted:

```js
// Concise arrow function
const add = (a, b) => a + b;

console.log(add(2, 3));  // Output: 5
```

#### **1.4. Anonymous Functions**

These are functions that do not have a name and are commonly used in function expressions, event handlers, or as arguments to other functions.

```js
// Anonymous function in an event handler
document.getElementById("btn").addEventListener("click", function() {
  console.log("Button clicked!");
});
```

#### **1.5. Immediately Invoked Function Expression (IIFE)**

An IIFE is a function that is executed as soon as it is defined. It's often used to create a **local scope** to avoid polluting the global scope.

```js
// IIFE
(function() {
  console.log("I am an IIFE!");
})();
```

---

### **2. Function Parameters and Arguments**

#### **2.1. Parameters**

When defining a function, you can specify **parameters** that the function will accept.

```js
function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("Alice");  // Output: Hello, Alice!
```

#### **2.2. Default Parameters**

ES6 introduced **default parameters** that can be used if no argument is passed for a parameter.

```js
function greet(name = "Guest") {
  console.log("Hello, " + name + "!");
}

greet();         // Output: Hello, Guest!
greet("Bob");    // Output: Hello, Bob!
```

#### **2.3. Rest Parameters**

Rest parameters allow a function to accept an indefinite number of arguments as an array.

```js
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4));  // Output: 10
```

---

### **3. Return Statement**

The `return` keyword is used to return a value from a function. If no `return` statement is provided, the function returns `undefined` by default.

```js
function add(a, b) {
  return a + b;
}

const result = add(2, 3);
console.log(result);  // Output: 5
```

---

### **4. Function Scope and Closures**

#### **4.1. Function Scope**

Variables declared inside a function are scoped to that function and cannot be accessed outside it.

```js
function testScope() {
  let x = 10;
  console.log(x);  // Output: 10
}

console.log(x);  // Error: x is not defined
```

#### **4.2. Closures**

A **closure** is a function that retains access to its lexical scope, even when executed outside that scope.

```js
function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}

const counter = outer();
counter();  // Output: 1
counter();  // Output: 2
counter();  // Output: 3
```

In the example above, the `inner` function maintains access to the `count` variable from the `outer` function.

---

### **5. Function Binding and `this` Keyword**

#### **5.1. The `this` Keyword**

The `this` keyword refers to the object it is called on. In traditional functions, `this` refers to the global object (or undefined in strict mode). In **arrow functions**, `this` is lexically bound to the context in which it was defined.

```js
// In regular function
function showThis() {
  console.log(this);
}
showThis();  // Output: global object (or undefined in strict mode)

// In arrow function
const showArrowThis = () => {
  console.log(this);
};
showArrowThis();  // Output: The `this` in this context will not refer to the global object but rather its lexical scope
```

#### **5.2. `bind()`, `call()`, and `apply()`**

These methods are used to explicitly set the value of `this`.

- **`bind()`**: Returns a new function with a bound `this`.
- **`call()`**: Calls a function with a specified `this` value and arguments provided individually.
- **`apply()`**: Similar to `call()`, but arguments are passed as an array.

```js
const person = {
  name: "Alice",
  greet: function() {
    console.log("Hello, " + this.name);
  }
};

const greetBob = person.greet.bind({ name: "Bob" });
greetBob();  // Output: Hello, Bob

person.greet.call({ name: "Charlie" });  // Output: Hello, Charlie
person.greet.apply({ name: "Dave" });   // Output: Hello, Dave
```

---

### **6. Anonymous Functions vs Named Functions**

- **Anonymous Functions**: Functions without names, usually used as function expressions or passed as arguments.
- **Named Functions**: Functions with names, typically used when the function needs to be invoked multiple times or called recursively.

```js
// Named function
function greet() {
  console.log("Hello!");
}

// Anonymous function
const greetAnonymous = function() {
  console.log("Hello!");
};
```

---

### **7. Function Hoisting**

- **Hoisting** allows you to call functions before they are declared in the code (only for function declarations, not for function expressions).
  
```js
// Function declaration is hoisted
greet();  // Output: Hello, world!

function greet() {
  console.log("Hello, world!");
}
```

However, **function expressions** are not hoisted:
```js
greet();  // Error: greet is not a function

const greet = function() {
  console.log("Hello, world!");
};
```

---

### **8. Callbacks and Higher-Order Functions**

#### **8.1. Callback Functions**

A **callback function** is a function passed as an argument to another function. It is often used in asynchronous operations like events and timers.

```js
function greeting(name, callback) {
  console.log("Hello, " + name);
  callback();
}

function sayGoodbye() {
  console.log("Goodbye!");
}

greeting("Alice", sayGoodbye);
// Output:
// Hello, Alice
// Goodbye!
```

#### **8.2. Higher-Order Functions**

A **higher-order function** is a function that either accepts another function as an argument or returns a function as a result.

```js
// Higher-order function
function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

const double = multiplier(2);
console.log(double(5));  // Output: 10
```

---

### **9. Arrow Functions and `this`**

Arrow functions behave differently with the `this` keyword. In a regular function, `this` is determined by the object the function is called on, but in an arrow function, `this` is inherited from the surrounding context (lexical scoping).

```js
const obj = {
  name: "Alice",
  regularFunction: function() {
    console.log(this.name); // Output: Alice
  },
  arrowFunction: () => {
    console.log(this.name); // Output: undefined (or window object in browsers)
  }
};

obj.regularFunction();  // Output: Alice
obj.arrowFunction();    // Output: undefined
```

---

### **Summary**

- **Functions** in JavaScript can be declared in various ways: function declarations, function expressions, and arrow functions.
- Functions can take parameters, and return values.
- **Arrow functions** have a shorter syntax and behave differently with the `this` keyword.
- **Closures** allow functions to maintain access to their lexical scope.
- JavaScript supports **higher-order functions** and **callbacks**, making it highly functional and versatile.


---
$$
\Large \text{Stuff for 2nd Insem}
$$

# 2nd InSem

### **1. Arrow Functions in JavaScript**

Arrow functions provide a concise way to write functions using the `=>` syntax. They differ from regular functions primarily in their handling of the `this` keyword.

#### **Key Features:**
- **Shorter Syntax**: Removes the need for the `function` keyword.
- **Lexical `this` Binding**: `this` is inherited from the surrounding scope.
- **Cannot Be Used as Constructors**: No `new` keyword support.
- **No Arguments Object**: Use rest parameters instead (`...args`).

#### **Syntax:**
```js
const functionName = (param1, param2) => expression;
```

#### **Examples:**
1. **Basic Arrow Function:**
   ```js
   const add = (a, b) => a + b;
   console.log(add(2, 3));  // Output: 5
   ```

2. **Single Parameter (No Parentheses):**
   ```js
   const greet = name => `Hello, ${name}`;
   console.log(greet("John"));  // Output: Hello, John
   ```

3. **No Parameters:**
   ```js
   const sayHello = () => console.log("Hello!");
   sayHello();  // Output: Hello!
   ```

4. **Multiline Arrow Function (with `{}` and `return`):**
   ```js
   const multiply = (a, b) => {
       const result = a * b;
       return result;
   };
   console.log(multiply(2, 3));  // Output: 6
   ```

#### **Limitations:**
- No `this` binding: Arrow functions cannot be used where `this` is dynamically needed (e.g., event listeners with `this`).
- No `prototype` property.

---

### **2. Loops in JavaScript**

Loops are used to execute a block of code repeatedly until a condition is met.

#### **Types of Loops:**

1. **`for` Loop**  
Executes a block of code a specified number of times.
```js
for (let i = 0; i < 5; i++) {
  console.log(i);  // Output: 0, 1, 2, 3, 4
}
```

2. **`while` Loop**  
Executes a block of code as long as a condition is true.
```js
let i = 0;
while (i < 3) {
  console.log(i);  // Output: 0, 1, 2
  i++;
}
```

3. **`do...while` Loop**  
Executes the block at least once, then continues while the condition is true.
```js
let i = 0;
do {
  console.log(i);  // Output: 0, 1, 2
  i++;
} while (i < 3);
```

4. **`for...in` Loop**  
Iterates over the enumerable properties (keys) of an object.
```js
const obj = { a: 1, b: 2 };
for (let key in obj) {
  console.log(key, obj[key]);  // Output: a 1, b 2
}
```

5. **`for...of` Loop**  
Iterates over iterable objects (e.g., arrays, strings).
```js
const arr = ['a', 'b', 'c'];
for (let value of arr) {
  console.log(value);  // Output: a, b, c
}
```

6. **`break` and `continue` Statements**  
- `break`: Exit the loop prematurely.
- `continue`: Skip the current iteration.
```js
for (let i = 0; i < 5; i++) {
  if (i === 3) break;
  console.log(i);  // Output: 0, 1, 2
}
```

---

### **3. DOM (Document Object Model)**

#### **What is DOM?**
The DOM is a programming interface for web documents. It represents the structure of a web page as a tree of objects, allowing developers to access and manipulate HTML and CSS programmatically.

#### **Why is it Useful?**
1. **Dynamic Content Updates**: Modify HTML elements, attributes, and styles dynamically.
2. **Event Handling**: Add interactivity by responding to user actions (e.g., clicks, keypresses).
3. **Traversal and Manipulation**: Traverse, add, or remove elements from the DOM tree.
4. **Access Element Properties**: Retrieve and update the content and attributes of elements.

#### **DOM Tree Example:**
```html
<!DOCTYPE html>
<html>
  <head><title>Document</title></head>
  <body>
    <h1 id="title">Hello</h1>
    <p class="text">This is the DOM</p>
  </body>
</html>
```

#### **Accessing DOM Elements:**
1. By ID:
   ```js
   const title = document.getElementById("title");
   console.log(title.textContent);  // Output: Hello
   ```

2. By Class Name:
   ```js
   const paragraphs = document.getElementsByClassName("text");
   console.log(paragraphs[0].textContent);  // Output: This is the DOM
   ```

3. By Query Selector:
   ```js
   const heading = document.querySelector("h1");
   console.log(heading.textContent);  // Output: Hello
   ```

#### **Manipulating the DOM:**
1. Change Content:
   ```js
   title.textContent = "Hello, World!";
   ```

2. Add a New Element:
   ```js
   const newElement = document.createElement("div");
   newElement.textContent = "I am new!";
   document.body.appendChild(newElement);
   ```

3. Modify Attributes:
   ```js
   title.setAttribute("style", "color: blue;");
   ```

4. Remove Element:
   ```js
   document.body.removeChild(paragraphs[0]);
   ```

---

## Assignment 3rd

`Section A`

### **Q.1 What is JavaScript?**
**JavaScript** is a high-level, interpreted programming language used to create interactive effects and dynamic content on websites. It is a core part of web development, alongside HTML and CSS, and runs on the client side (in the browser).

### **Q.2 What are the primitive data types in JavaScript?**
JavaScript has **7 primitive data types**:
1. **Number**: Represents numeric values (integer or floating-point).  
   Example: `let num = 42;`
2. **String**: Represents a sequence of characters.  
   Example: `let name = "John";`
3. **Boolean**: Represents `true` or `false`.  
   Example: `let isActive = true;`
4. **Undefined**: Represents a variable that has been declared but not assigned a value.  
   Example: `let x;  // undefined`
5. **Null**: Represents the absence of any value or object.  
   Example: `let obj = null;`
6. **Symbol**: Represents a unique and immutable value used as an identifier for object properties.  
   Example: `let sym = Symbol('description');`
7. **BigInt**: Represents numbers larger than `2^53 - 1`.  
   Example: `let bigNum = 1234567890123456789012345678901234567890n;`

### **Q.3 What are the different ways to include JavaScript in an HTML document?**
1. **Internal JavaScript**: Included directly within a `<script>` tag inside the HTML file.  
   Example:
   ```html
   <script>
     console.log("Hello, World!");
   </script>
   ```
2. **External JavaScript**: Linked to an external `.js` file using the `src` attribute.  
   Example:
   ```html
   <script src="script.js"></script>
   ```
3. **Inline JavaScript**: Embedded directly within an HTML element's event handler.  
   Example:
   ```html
   <button onclick="alert('Clicked!')">Click Me</button>
   ```

### **Q.4 How do you use let and const to declare variables?**
- **`let`**: Declares a block-scoped variable that can be reassigned.
  Example:
  ```js
  let age = 25;
  age = 30;  // Reassigned
  ```
  
- **`const`**: Declares a block-scoped variable that **cannot** be reassigned.
  Example:
  ```js
  const name = "Alice";
  // name = "Bob";  // Error: Assignment to constant variable.
  ```

### **Q.5 How do you write conditional statements using if and else?**
Conditional statements in JavaScript use `if`, `else if`, and `else` to execute code based on conditions.

- **`if`**: Executes a block of code if the condition is `true`.
- **`else`**: Executes a block of code if the condition is `false`.
- **`else if`**: Specifies a new condition if the previous condition is `false`.

Example:
```js
let age = 18;

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}
```

### **Summary:**
- **`if`**: Checks condition.
- **`else if`**: Checks another condition.
- **`else`**: Runs if all previous conditions are false.

---

`Section B`

### **Q.1 What are the different ways to define functions in JavaScript (function declaration, function expression)?**

There are two primary ways to define functions in JavaScript:

#### **1. Function Declaration**  
A function declaration defines a function using the `function` keyword followed by the function name, parameters (optional), and the body. It is hoisted, meaning it can be called before its definition in the code.

**Syntax:**
```js
function functionName(param1, param2) {
  // Function body
  return param1 + param2;
}
```

**Example:**
```js
function greet(name) {
  return "Hello, " + name + "!";
}
console.log(greet("Alice"));  // Output: Hello, Alice!
```

#### **2. Function Expression**  
A function expression defines a function and assigns it to a variable. Unlike function declarations, function expressions are **not hoisted** and can only be called after they are defined.

**Syntax:**
```js
const functionName = function(param1, param2) {
  // Function body
  return param1 + param2;
};
```

**Example:**
```js
const greet = function(name) {
  return "Hello, " + name + "!";
};
console.log(greet("Bob"));  // Output: Hello, Bob!
```

#### **Key Differences**:
- **Hoisting**: Function declarations are hoisted, while function expressions are not.
- **Named vs. Anonymous**: Function declarations are usually named, while function expressions can be anonymous (i.e., without a name).

---

### **Q.2 Explain the concept of function parameters and arguments.**

#### **Function Parameters:**
Parameters are variables defined in the function declaration or expression that represent the values the function will receive when called. They act as placeholders for the actual values (arguments) passed to the function.

**Syntax:**
```js
function add(a, b) {
  return a + b;
}
```
In this case, `a` and `b` are the **parameters**.

#### **Function Arguments:**
Arguments are the actual values passed to the function when it is invoked. These values replace the parameters in the function definition.

**Example:**
```js
console.log(add(3, 4));  // Output: 7
```
Here, `3` and `4` are the **arguments** passed to the function `add`.

#### **Key Differences:**
- **Parameters**: Defined in the function declaration.
- **Arguments**: Passed when the function is invoked.

---

### **Q.3 Explain the three logical operators: AND, OR, and NOT**

#### **1. AND (`&&`)**  
The `AND` operator returns `true` only if **both operands** are `true`; otherwise, it returns `false`.

**Syntax:**
```js
operand1 && operand2
```

**Example:**
```js
console.log(true && true);   // Output: true
console.log(true && false);  // Output: false
console.log(false && false); // Output: false
```

#### **2. OR (`||`)**  
The `OR` operator returns `true` if **at least one operand** is `true`; it returns `false` only if both operands are `false`.

**Syntax:**
```js
operand1 || operand2
```

**Example:**
```js
console.log(true || false);  // Output: true
console.log(false || false); // Output: false
console.log(true || true);   // Output: true
```

#### **3. NOT (`!`)**  
The `NOT` operator reverses the logical state of its operand. If the operand is `true`, it returns `false`, and if the operand is `false`, it returns `true`.

**Syntax:**
```js
!operand
```

**Example:**
```js
console.log(!true);   // Output: false
console.log(!false);  // Output: true
```

---

### **Summary:**
- **Logical AND (`&&`)**: Returns `true` if both conditions are true.
- **Logical OR (`||`)**: Returns `true` if at least one condition is true.
- **Logical NOT (`!`)**: Inverts the logical value of the operand.

---

`Section C`

### **Q.1 What is the difference between synchronous and asynchronous JavaScript? Explain the concept of the event loop and how it handles asynchronous operations.**

#### **1. Synchronous JavaScript:**
In **synchronous** programming, tasks are executed **one after another** in the order they are written. The program waits for one task to complete before moving to the next one.

- **Behavior**: Each operation blocks the thread until it's completed.
- **Example**: 
  ```js
  console.log("Start");
  console.log("Middle");
  console.log("End");
  ```
  Output:
  ```
  Start
  Middle
  End
  ```
  In synchronous code, the program executes each `console.log()` statement one after the other, blocking the next task until the previous one finishes.

#### **2. Asynchronous JavaScript:**
In **asynchronous** programming, tasks are executed **independently**, allowing the program to continue running without waiting for a task to finish. This is especially useful for operations that take time, like reading a file, making a network request, or waiting for a user input.

- **Behavior**: The program moves to the next task without waiting for the current task to finish, using mechanisms like callbacks, promises, or async/await to handle when the task completes.
- **Example**:
  ```js
  setTimeout(() => {
    console.log("This runs last");
  }, 1000);
  console.log("This runs first");
  ```
  Output:
  ```
  This runs first
  This runs last
  ```

#### **3. The Event Loop:**
The **event loop** is a mechanism in JavaScript that allows asynchronous operations to run without blocking the main thread. It works alongside the **call stack** and **message queue** to manage the execution of code.

- **Call Stack**: The call stack holds the functions that are being executed. If a function has a synchronous operation, it will block the stack until it's complete.
- **Message Queue**: The message queue holds asynchronous tasks (like callbacks, promises, etc.) that are waiting for the call stack to be clear before they can be executed.
- **Event Loop**: The event loop constantly checks if the call stack is empty. If it is, it moves the first task from the message queue to the call stack.

**How the event loop works**:
1. Synchronous tasks are added to the **call stack** and executed one by one.
2. When an asynchronous task is encountered (like `setTimeout`), it is placed in the **message queue**.
3. Once the call stack is empty, the event loop picks tasks from the message queue and adds them to the call stack for execution.

---

### **Q.2 What is the DOM and how does it relate to JavaScript? Explain how JavaScript can manipulate the DOM to change the structure and style of a web page.**

#### **1. What is the DOM (Document Object Model)?**
The **DOM** is a programming interface for web documents. It represents the page so that programs (like JavaScript) can interact with it, modifying the structure, style, and content dynamically. The DOM represents the document as a tree of nodes, where each node corresponds to a part of the document (e.g., elements, attributes, text).

- The DOM provides a structured representation of the HTML document as an object.
- JavaScript interacts with the DOM to **change the content**, **structure**, or **style** of the web page.

#### **2. How JavaScript interacts with the DOM:**
JavaScript uses the DOM API to access and manipulate web elements. JavaScript can modify:
1. **Content**: Update text or HTML content within elements.
2. **Structure**: Add, remove, or change HTML elements.
3. **Style**: Modify CSS properties to change the appearance of elements.

#### **Example 1: Changing content**  
```js
// Accessing the element with id "header"
let header = document.getElementById("header");
header.innerHTML = "Welcome to My Website!";  // Modifies the content inside the header
```

#### **Example 2: Changing style**  
```js
let paragraph = document.getElementById("text");
paragraph.style.color = "blue";  // Changes text color to blue
paragraph.style.fontSize = "20px";  // Changes font size to 20px
```

#### **Example 3: Adding a new element**  
```js
let newElement = document.createElement("div");
newElement.innerHTML = "This is a new div element!";
document.body.appendChild(newElement);  // Appends the new element to the body
```

In summary, JavaScript uses the DOM to:
- Access HTML elements (`getElementById`, `querySelector`, etc.)
- Modify content (`innerHTML`, `textContent`)
- Manipulate attributes (`setAttribute`, `removeAttribute`)
- Apply styles (`style`)
- Handle events (`addEventListener`)

---

### **Q.3 How do Promises and async/await work in modern JavaScript? Discuss their usage in handling asynchronous operations and improving code readability.**

#### **1. Promises:**
A **Promise** is an object representing the eventual completion (or failure) of an asynchronous operation. It is used to handle asynchronous code in a more manageable way, replacing callback-based solutions.

A promise can be in one of three states:
- **Pending**: Initial state; the operation is still in progress.
- **Fulfilled**: The operation completed successfully.
- **Rejected**: The operation failed.

**Syntax:**
```js
let promise = new Promise((resolve, reject) => {
  let success = true;  // Simulate some condition
  if (success) {
    resolve("Operation successful!");
  } else {
    reject("Operation failed!");
  }
});
```

**Handling promises:**
- **`then()`**: Runs when the promise is fulfilled.
- **`catch()`**: Runs when the promise is rejected.

**Example:**
```js
let promise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("Data fetched successfully");
  } else {
    reject("Failed to fetch data");
  }
});

promise.then((result) => {
  console.log(result);  // Output: Data fetched successfully
}).catch((error) => {
  console.log(error);   // Output: Failed to fetch data
});
```

#### **2. async/await:**
The **async/await** syntax provides a more readable way to handle asynchronous code and promises.

- **`async`**: Declares a function as asynchronous, meaning it will return a promise.
- **`await`**: Pauses the execution of the async function until the promise is resolved or rejected.

**Syntax:**
```js
async function fetchData() {
  let data = await someAsyncOperation();
  console.log(data);
}
```

**Example:**
```js
// Using async/await with promises
async function fetchData() {
  try {
    let response = await fetch('https://api.example.com/data');
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchData();
```

#### **Advantages of async/await over promises**:
1. **Readability**: The code looks more like synchronous code, which is easier to follow.
2. **Error Handling**: `try/catch` can be used directly, making error handling more straightforward.
3. **Control Flow**: Eliminates the need for multiple `.then()` chains.

#### **Summary of Promises vs async/await**:
- **Promises**: Provides `.then()` and `.catch()` to handle success and failure of asynchronous operations.
- **async/await**: Simplifies asynchronous code, making it look and behave more like synchronous code, with `await` pausing execution until a promise resolves.

---

### **Summary:**
- **Synchronous vs Asynchronous**: Synchronous operations block the thread, while asynchronous operations allow the code to continue executing.
- **DOM**: The DOM allows JavaScript to interact with and manipulate the structure, content, and style of a web page.
- **Promises & async/await**: Promises handle asynchronous operations, and async/await simplifies working with promises, making the code more readable and maintainable.

---

## Assignment 4th

`Section A`

### **Q.1 What is React?**
React is a **JavaScript library** for building **user interfaces** (UIs), primarily for single-page applications (SPAs). It allows developers to build reusable UI components and manage the state of applications efficiently. React uses a **declarative** approach, meaning you describe how the UI should look for a given state, and React takes care of updating the DOM when the state changes.

**Example**:
```js
import React from 'react';

function App() {
  return <h1>Hello, React!</h1>;
}

export default App;
```

---

### **Q.2 What are JSX and components?**

#### **JSX**:
JSX (JavaScript XML) is a **syntax extension** for JavaScript that allows you to write HTML-like code within JavaScript. It is used in React to describe the UI structure. Although it looks like HTML, JSX is ultimately transformed into JavaScript code by React.

**Example of JSX**:
```js
const element = <h1>Hello, world!</h1>;
```
JSX allows you to embed dynamic expressions and variables inside the HTML-like syntax using curly braces `{}`.

#### **Components**:
A **component** is a reusable, self-contained piece of the UI that is responsible for rendering a part of the page. Components can either be **class components** or **functional components**.

---

### **Q.3 Explain the difference between class components and functional components**

#### **Class Components**:
Class components are **ES6 classes** that extend `React.Component` and can hold **state** and lifecycle methods. They are used to create components that require more complex logic.

- **State**: Managed inside the class.
- **Lifecycle Methods**: Available for handling events at different stages of the component's existence (e.g., `componentDidMount`, `componentWillUnmount`).

**Example**:
```js
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    return <div>{this.state.count}</div>;
  }
}
```

#### **Functional Components**:
Functional components are simpler **functions** that receive `props` as arguments and return JSX. Since the introduction of **React hooks**, functional components can now also manage **state** and use lifecycle-like functionality.

- **State**: Managed using `useState` hook.
- **Lifecycle Methods**: Managed using `useEffect` hook.

**Example**:
```js
const MyComponent = () => {
  const [count, setCount] = useState(0);
  return <div>{count}</div>;
};
```

---

### **Q.4 What are the main phases in a component's lifecycle?**

A React component's lifecycle is divided into three main phases:

1. **Mounting**: The phase where the component is being created and inserted into the DOM.
   - Methods: `constructor()`, `getDerivedStateFromProps()`, `render()`, `componentDidMount()`
   
2. **Updating**: The phase where the component is re-rendered due to changes in state or props.
   - Methods: `getDerivedStateFromProps()`, `shouldComponentUpdate()`, `render()`, `getSnapshotBeforeUpdate()`, `componentDidUpdate()`
   
3. **Unmounting**: The phase where the component is removed from the DOM.
   - Method: `componentWillUnmount()`

With **functional components**, these lifecycle methods are replaced by **hooks** like `useEffect` to handle similar behaviors.

---

### **Q.5 What is the concept of state in React?**

**State** is an object that represents the **dynamic data** or **internal state** of a component in React. It allows components to create interactive UIs by changing the component’s output when the state changes.

- **State** is **mutable**, meaning it can change over time.
- The **state** can be modified using the `setState()` method in class components or the `useState()` hook in functional components.
- When the **state** changes, React re-renders the component to reflect the updated state.

**Example (Functional Component)**:
```js
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // State variable "count" with initial value 0

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

In this example:
- `useState(0)` creates the state variable `count` with an initial value of 0.
- `setCount` is used to update the state when the button is clicked.

---

`Section B`

### **Q.1 What is React Router? How do you define routes and match URLs to components?**

**React Router** is a **standard library** for routing in React. It enables navigation among different components/views in a React application, allowing users to move between pages without reloading the entire application. React Router uses a **declarative** approach to handle routing, where the routes are defined in the React component tree.

#### **How to Define Routes**:
You can define routes using the `Route` component and wrap it with a `BrowserRouter` or `HashRouter` component. You also use the `Link` component for navigation between different routes.

- `BrowserRouter`: Uses HTML5 history API to manage URL.
- `Route`: Defines a route that matches a URL pattern and renders a component.
- `Link`: Provides navigation without page refresh.

#### **Example**:

```js
import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

const Home = () => <h2>Home Page</h2>;
const About = () => <h2>About Page</h2>;

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
}

export default App;
```

In this example:
- `Switch`: Ensures that only one route is rendered at a time.
- `exact`: Ensures that the route only matches the exact URL.
- `Link`: Provides navigation to different routes.

---

### **Q.2 What is the concept of lifting state up? What is the difference between local state and global state management solutions like Redux?**

#### **Lifting State Up**:
**Lifting state up** refers to the practice of **moving state** from a child component to a common parent component when multiple child components need access to the same state. The parent component holds the state and passes it down as props to child components. This allows child components to communicate and share data via their parent.

#### **Example of Lifting State Up**:
```js
import React, { useState } from 'react';

function ParentComponent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <ChildComponent count={count} setCount={setCount} />
    </div>
  );
}

function ChildComponent({ count, setCount }) {
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```
In this example:
- `count` and `setCount` are lifted to the `ParentComponent`, and passed down as props to the `ChildComponent`.

#### **Local State vs. Global State Management**:
- **Local State**: Refers to state that is **managed within a single component** (using `useState` or `setState` in class components). It is **private** to the component and cannot be shared between components directly.
- **Global State**: Refers to state that is **managed globally** and can be shared across different components. Global state solutions like **Redux**, **Context API**, or **MobX** allow components to access and update state from any part of the application.

**Difference**:
- **Local State**: More suitable for small, isolated components.
- **Global State**: Useful for managing state that is shared across many components or when components need to communicate with each other.

**Example of Redux (Global State Management)**:
```js
// Action
const increment = () => ({
  type: 'INCREMENT'
});

// Reducer
const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return state + 1;
    default:
      return state;
  }
};

// Store setup
import { createStore } from 'redux';
const store = createStore(counterReducer);

// Dispatch action
store.dispatch(increment());
```
In this example, the Redux store holds the global state (`counter`), and components can subscribe to the store to get updates and dispatch actions to change the state.

---

### **Q.3 Explain the use of the useState hook in functional components. Provide an example.**

The `useState` hook is a built-in **React hook** that allows you to add **state** to **functional components**. Before hooks, state could only be used in class components. `useState` provides a way to create and manage state in functional components.

#### **Syntax**:
```js
const [state, setState] = useState(initialValue);
```

- `state`: The current value of the state variable.
- `setState`: A function that allows you to update the state.
- `initialValue`: The initial value for the state variable.

#### **Example**:

```js
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);  // Initial state is set to 0

  return (
    <div>
      <p>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default Counter;
```

In this example:
- The `useState` hook initializes `count` with `0`.
- When the "Increment" button is clicked, `setCount` updates the `count` state by incrementing it by 1.
- The UI is re-rendered whenever `setCount` is called, reflecting the updated state.

This is how the `useState` hook is used to handle local state within a functional component.

---

`Section C`

### **Q.1 How does state management work in React? Explain the process of updating state and triggering re-renders.**

In **React**, **state management** refers to the handling of the component's data (or state) and how it is passed between components. React provides a **local state** for each component, which can be updated using hooks like `useState` (for functional components) or `setState` (for class components). When the state is updated, React triggers a **re-render** of the component to reflect the new state.

#### **How State Management Works:**
1. **Initial State**: When a component is created, it has an initial state value defined (using `useState` or `this.state` in class components).
2. **Updating State**: When a state is updated using `setState` (in class components) or the state updater function from `useState` (in functional components), React marks the component as "dirty" and schedules a re-render.
3. **Re-rendering**: React updates the UI to reflect the new state value by re-rendering the component. The state update triggers a re-evaluation of the component's render method or function, which in turn updates the DOM.
4. **State Propagation**: If the updated state is passed down as **props** to child components, those components will also re-render with the updated state.

#### **Example of Updating State and Triggering Re-render**:
```js
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // Initial state is 0

  const increment = () => {
    setCount(count + 1); // This will trigger a re-render with the updated state
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Counter;
```

In this example, clicking the **Increment** button calls `setCount`, which updates the state and triggers a re-render. The updated `count` value is reflected in the UI.

#### **Re-render Behavior**:
- React efficiently re-renders only the components that depend on the changed state. It uses **virtual DOM** to compare the previous and new states to determine the minimal set of changes required in the actual DOM.

---

### **Q.2 How can you use Context API to share data globally in React? Discuss its advantages and limitations.**

The **Context API** in React is a way to manage and share data globally across components without explicitly passing props down the component tree. It provides a **global state** accessible by any component, no matter how deep it is in the component tree.

#### **How to Use Context API:**
1. **Create a Context**: Use `React.createContext()` to create a context object.
2. **Provide Context**: Use the `Provider` component to wrap your application (or part of it) and pass down the data through the `value` prop.
3. **Consume Context**: Use the `useContext` hook (in functional components) or `Context.Consumer` (in class components) to consume and access the data in the context.

#### **Example**:

```js
import React, { createContext, useState, useContext } from 'react';

// Create a Context
const CountContext = createContext();

function App() {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      <Counter />
    </CountContext.Provider>
  );
}

function Counter() {
  const { count, setCount } = useContext(CountContext);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default App;
```

In this example:
- `CountContext` is created and provides the `count` state and the `setCount` function to all components that consume it.
- `useContext` is used in `Counter` to access the `count` state and `setCount` function.

#### **Advantages of Context API**:
1. **Global State Management**: Allows state to be shared across many components without the need to pass props down manually.
2. **Simplifies Component Communication**: Ideal for sharing data that needs to be accessed by many components, such as themes, authentication data, etc.
3. **Built-in React Solution**: No need for third-party state management libraries like Redux for smaller-scale applications.

#### **Limitations of Context API**:
1. **Performance Issues**: Since any change to the context value causes a re-render of all consuming components, it can lead to performance issues for large or deeply nested component trees.
2. **Limited to Propagating Data**: Context is ideal for propagating global data, but complex application logic (like side-effects or managing async data) still requires more advanced state management solutions like Redux or MobX.
3. **Not a Full State Management Solution**: While Context is great for sharing data, it does not have the sophisticated features of a state management library, like middleware or actions.

---

### **Q.3 What is React Router and how does it work? Explain the core concepts of routes, links, and navigation.**

**React Router** is a popular library for handling **routing** in React applications. It enables navigation between different components and views in a single-page application (SPA) without requiring a full page reload.

#### **How React Router Works**:
- It uses a **URL-based routing** system where different URL paths are mapped to React components.
- When the user navigates to a different URL, React Router updates the view to match the URL by rendering the associated component.
- React Router relies on the **history API** (for browsers) to manipulate the browser's history and ensure a smooth navigation experience without full page reloads.

#### **Core Concepts**:

1. **Routes**:
   - `Route` is used to define a **path** and map it to a specific component. React Router compares the current URL with the `path` prop of each `Route`, and if they match, it renders the component.
   
   **Example**:
   ```js
   <Route path="/home" component={Home} />
   ```

2. **Links**:
   - `Link` is used to create **links** that enable users to navigate to different routes. It prevents page reloads by using client-side routing.

   **Example**:
   ```js
   <Link to="/home">Go to Home</Link>
   ```

3. **Navigation**:
   - React Router provides multiple components for navigation like `Link`, `NavLink`, and `Redirect` (for redirection).
   - `useHistory` (hook) can also be used to programmatically navigate between routes.
   
   **Example** of Navigation:
   ```js
   import { useHistory } from 'react-router-dom';
   
   function MyComponent() {
     const history = useHistory();
     const goToHome = () => {
       history.push('/home'); // Navigate programmatically
     };

     return <button onClick={goToHome}>Go to Home</button>;
   }
   ```

4. **Switch**:
   - `Switch` renders the **first matching route** and ensures that only one route is displayed at a time.

   **Example**:
   ```js
   <Switch>
     <Route path="/about" component={About} />
     <Route path="/contact" component={Contact} />
   </Switch>
   ```

#### **Example of React Router Usage**:
```js
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const Home = () => <h2>Home Page</h2>;
const About = () => <h2>About Page</h2>;

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
}

export default App;
```

In this example:
- The `BrowserRouter` (`Router`) wraps the entire app, enabling the routing system.
- `Link` components are used to navigate between `Home` and `About` routes.
- The `Switch` ensures that only the first matching `Route` is rendered.

#### **Core Concepts Summary**:
- **Route**: Defines a mapping between a URL and a component.
- **Link**: Provides navigation to a different route without a full page reload.
- **Switch**: Renders only the first matching route.
- **History API**: Handles client-side navigation and keeps track of URL changes.

React Router helps build **single-page applications** where navigation happens within the same page, improving user experience with faster, seamless transitions.

$$
\Large \text{2nd Insem Ends Here}
$$