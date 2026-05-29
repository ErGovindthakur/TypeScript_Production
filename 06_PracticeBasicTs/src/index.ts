// let myName:string = "Govind";
// myName = 123; It will produce an error, of type number is not assignable to type string
// console.log(myName);

// Let's start exploring typescript from basic to advance

// 1. Topic : Introduction to Typescript

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

// 2. Topic Basic Data Types (string, number, boolean, array, tuple)

// => Basic data types form the foundational building blocks of data safety in Typescript. By explicitly defining your data shapes, you prevent logic bugs before your code even runs.

// -> Prevent Type Coercion : Stops accidental operations like adding a number to a boolean.
// -> Array safety : Ensures a collections contain only uniform, predictable data.
// -> Tuple Restrictions : Locks down arrays that require a rigid structure and fixed length.
// -> Self-Documenting : Makes your code instantly readable without needing extra documentation comments.

// code Example:

// 1. Primitive Types
let userName :string = "Ajay";
let totalScore : number = 90.4;
let isPremiumUser : boolean = true;

// 2. Array types (Two equivalent ways to declare)
let scores : number[] = [1,2,3];
let fruits : Array<string> = ["Apple","Orange","Grapes"];

// 3. Tuple type (Fixed length, fixed order of type)
// let databaseRecords : [number,string, boolean] = [1,"a",true];
let databaseRecords : [number,string, boolean];
databaseRecords = [101,"Admin User",true];

// Top 5 Interview Questions from Topic 2

// Q) 1. What is the diff btw an Array and a Tuple in typescript ?
// => An Array holds an arbitrary number of elements, usually of the same types
// => A Tuple has a fixed number of elements with predefined types in specific order.

// Explored Oject in ts
type Student = {
    id: string;
    name: string;
    course: string;
    marks: number;
    isPassed: boolean;
};

const students: Student[] = [
    {
        id: "12xyx12",
        name: "Gray",
        course: "ReactJS",
        marks: 99,
        isPassed: true,
    },
    {
        id: "12xyx34",
        name: "Nil",
        course: "Node.js",
        marks: 98,
        isPassed: true,
    },
    {
        id: "12avc34",
        name: "Guest",
        course: "Python",
        marks: 98,
        isPassed: true,
    },
];



// Exploring Type alias , Union and Literal Types

// 1. Type alias

type Product = {
    id:string | number; // this is union type
    name:string;
    price:number;
    category:"electronics" | "fashion" | "books" // this is literal types
};

const products : Product[] = [
    {
        id:1,
        name:"Apple Watch",
        price:120000,
        category:"electronics"
    },
    {
        id:"2",
        name:"Free Fit Jeans",
        price:12000,
        category:"fashion"
    },
    {
        id:3,
        name:"1 Percent Rule",
        price:1200,
        category:"books"
    },
];

let filteredProducts : Product[] = products.filter((prd)=>prd.category==="books");
console.log(filteredProducts[0]);