// let myName:string = "Govind";
// myName = 123; It will produce an error, of type number is not assignable to type string
// console.log(myName);

// Let's start exploring typescript from basic to advance

// 1. Topic : Introduction to Javascript

// 1. What is Typescript ?
// => Typescript is strongly typed programming language, built on top of javascript. It acts as a strict superpower for javascript by adding static typing.

// Benefits of using ts

/*
1. Early bug detection at dev phase , while writing code.
2. Predictable code
3. Auto completion of code suggestions
4. Production standard js code compilation
*/

// Example

let userAge : number = 25;

userAge = 26; // this works fine

// userAge = "Twenty-Five"; // It produces type error

function greetUser(name:string):string{
     return `Hello, ${name}`
};
console.log(greetUser("Govinda"));


// Top 5 Interview Questions from Topic 1

// Q) 1. What is the main difference btw Javascript and Typescript ?
// => Javascript is dynamically typed, here types are checked at runtime, while typescript is statically typed, here types are checked at compile time.
// => Since Typescript is superset of Javascript, meaning all valid js is valid TS.

// Q) 2. Why do browser understand Javascript but cannot run Typescript directly ?
// => Browser only have engines build to parse and execute Javascript.
// => Typescript requires a compiler (tsc) to strip away type annotations.
// => This compilation process transforms TS files into standard, cross-browser js.

// Q) 3. What is the role of the "tsconfig.json" file ?
// => It marks the root directory of a Typescript project.
// => It specifies the compiler options required to compile the project.
// => It defines while files to include or exclude during compilation.

// Q) 4. What does the "any" type do, and should you use it ?
// => The "any" type opts a variable completely out of type-checking.
// => It makes Typescript behave exactly like loose, dynamic javascript.
// => You should avoid it because it defeats the purpose of using Typescript.

// Q) 5. Is Typescript is structural or a nominal typing system ?
// => Typescript uses a structural typing system (also called duck typing).
// => It checks the shape and properties of an object, not its declared name.
// => Two diff classes with identical properties are treated as the same type.