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

// since it doesn't produce error, bcz it has no custom literal type
class MasalaChai implements teaRecipe {
  water = 100;
  milk = 50;
}

type size = "small" | "large"; // since here is custom literal types so convert into interface

// let's convert size type to interface
interface cupSize {
  size: "small" | "large";
}
// class chaiSize implements size{
//      size="small" // no suggestions, when size is "type"
// }
class chaiSize implements cupSize {
  size: "small" | "large" = "large"; // suggestions, when cupSize is "interface"
}


// type Response = {ok:true} | {ok:false};

interface Response {
  res:{ok:true} | {ok:false}
}
class myRes implements Response{
  res: { ok: true; } | { ok: false; } = {ok:true};
}

// exploring union "|"

type TeaType = "masala" | "ginger" | "lemon";

function orderChai(tea:TeaType):string{
  tea='lemon'
  return tea;
}

// Exploring intersection '&'
type BaseChai = {tealeaves:number};
type Extra = {masala:number};

type MasalaChai2 = BaseChai & Extra;

const cup : MasalaChai2 = {
  tealeaves:2,
  masala:1
}

// applying optional value

type User = {
  userName:string;
  boi?:string
};

const u1:User = {
  userName:"Govind"
}
const u2:User = {
  userName:"Govind Thakur",
  boi:"Software Developer"
}

// setting a readonly property

type config = {
  readonly appName:string;
  version:number
}

const cfg : config = {
  appName : "Get-Insights",
  version:1
}

// cfg.appName = "ABC"; // it can't be modified