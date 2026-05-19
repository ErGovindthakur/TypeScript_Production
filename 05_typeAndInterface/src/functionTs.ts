// first function in typescript

function makeChai(type: string, cups: number) {
  console.log(`Making ${cups} cups of ${type}`);
}

function getChaiPrice(): number {
  return 5;
}

function makeOrder(order: string) {
  if (!order) return null;
  return order;
}
makeOrder("Green Tea");

function logChai(): void {
  console.log("Chai is ready");
}

function orderChai(type?: string) {
  console.log("My chai");
}

function orderChai2(type: string, size?: "small" | "large") {
  console.log("chai order 2");
}
orderChai2("Green Tea");

function detailedChai(order: {
  name: string;
  price: number;
  size?: "small" | "large";
}) {
  console.log(order);
}
