// Let's learn array in ts

let names: string[] = ["Jay","Vijay"];

let ratting : Array<number> = [4.2,4.5,6.3];

type products = {
     name:string;
     price:number
};

let productList : products[] = [
     {name:"Laptop",price:453},
     {name:"Iphone",price:430},
];

const table : number[][] = [
     [1,2,3],
     [4,5,6]
];

const configToRead : readonly string[] = ["4GB","QuadCore"];