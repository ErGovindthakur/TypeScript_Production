let todayTask: string = "Exploring type and interface in typescript";

console.log(todayTask);

// 1. type

// Note -> Here funcType is common in both and repeated
function func1(funcType: { arg1: string; arg2: number }) {
  console.log(funcType);
}

function func2(funcType: { arg1: string; arg2: number }) {
  console.log(funcType);
}

// Note -> 1: Here type comes in the game

type chaiOrder = {
  name: string;
  sugar: number;
  strong: boolean;
};

// here we have used a single type written at once and used twice
function serveChai1(order: chaiOrder) {
  console.log(order);
}

function serveChai2(order: chaiOrder) {
  console.log(order);
}

// 2. exploring interface in typescript

type teaRecipe = {
  water: number;
  milk: number;
};

// since it doesn't produce error, bcz it has no custom type
class MasalaChai implements teaRecipe {
  water = 100;
  milk = 50;
}

type size = "small" | "large"; // since here is custom types so convert into interface

// let's convert size type to interface
interface cupSize {
  size: "small" | "large";
}
// class chaiSize implements size{
//      size="small" // no suggestions, when size is "type"
// }
class chaiSize implements cupSize {
  size: "small" | "large" = "small"; // suggestions, when cupSize is "interface"
}
