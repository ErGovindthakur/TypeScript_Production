function greetToStart(name:string):string{
     // return "Hello, "+name;
     // return 12; // we will get a warning here
     return `Hello , ${name}`; // best practices to follow
};
let greet = greetToStart("Govind");
console.log(greet);
