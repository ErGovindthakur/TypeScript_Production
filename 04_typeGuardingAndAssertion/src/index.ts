// 1. Exploring any vs unknown

let data1: any;

data1 = "Govind";
console.log(data1.toUpperCase());
data1 = 123;

let name: string = data1;
console.log(name); // it will not give you any warning or typechecking msg

// here it will produce a runtime error but don't protect you at compile time in dev phase
// console.log(data1.toUpperCase());

let data2: unknown;

data2 = "Govind";
data2 = 123;
data2 = true;

let name2: string = data2 as string; // here you will have to use type assertion and tell ts to trust you.

// here you will have to apply type guards
// console.log(data2.toUpperCase())

if (typeof data2 === "string") {
  console.log(data2.toUpperCase());
} else if (typeof data2 === "number") {
  console.log("Data2 is a number", data2);
} else {
  console.log("data to is a boolean", data2);
}

// creating a reusable function to check type

type Role = "user" | "admin" | "super-admin";

function checkRole(roles: Role): void {
  if (roles === "admin") {
    console.log("Admin login");
    return;
  }
  if (roles === "user") {
    console.log("User login");
    return;
  }
  // what if i will comment it
  if (roles === "super-admin") {
    console.log("super-admin login");
    return;
  }
  roles;
}

// exploring try catch

try {
  console.log("Got data successfully...");
} catch (error) {
  // console.log(error.message) // here you will have to apply type guards
  if (error instanceof Error) {
    console.log("Error : ", error.message);
  }
  console.log("Error default: ", error);
}

// a function which will never return anything

function neverReturn(): never {
  while (true) {}
}
