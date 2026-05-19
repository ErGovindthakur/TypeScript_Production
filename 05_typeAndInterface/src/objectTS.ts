// ======================================================
// OBJECTS IN TYPESCRIPT
// ======================================================

// In TypeScript, objects are one of the MOST IMPORTANT concepts.
// They are heavily used in:
// - APIs
// - Databases
// - React props
// - Backend services
// - Authentication systems
// - E-commerce applications



// ======================================================
// 1. NORMAL JAVASCRIPT OBJECT
// ======================================================

// TypeScript automatically infers the type of object properties.
// This is called:
// 👉 Type Inference

let myTea = {
  name: "Lemon Tea",
  price: 25,
  isHot: true,
};

// TypeScript internally understands:
//
// {
//   name: string;
//   price: number;
//   isHot: boolean;
// }

console.log(myTea);



// ======================================================
// 2. DEFINING OBJECT TYPES EXPLICITLY
// ======================================================

// Here we explicitly define object structure.

let tea: {
  name: string;
  price: number;
  isHot: boolean;
};

// Now any object assigned to `tea`
// MUST follow this structure.

tea = {
  name: "Masala Tea",
  price: 30,
  isHot: true,
};

console.log(tea);



// ======================================================
// 3. BEST PRACTICE — USING TYPE ALIASES
// ======================================================

// Instead of repeating object structures again and again,
// we create reusable object types.

type Tea = {
  name: string;
  price: number;
  ingredients: string[];
};

// Now we can reuse `Tea` type everywhere.

const gingerTea: Tea = {
  name: "Ginger Tea",
  price: 120,
  ingredients: ["Ginger", "Tea Leaves"],
};

console.log(gingerTea);



// ======================================================
// 4. STRUCTURAL TYPING IN TYPESCRIPT
// ======================================================

// TypeScript follows:
// 👉 Structural Typing
//
// Meaning:
// "If object contains required properties,
// it is considered valid."

type Cup = {
  size: string;
};

// Object contains extra property `material`.
// This is allowed because it still contains required property `size`.

let bigCup = {
  size: "500ml",
  material: "steel",
};

// Valid assignment
const smallCup: Cup = bigCup;

console.log(smallCup);



// ======================================================
// 5. ANOTHER STRUCTURAL TYPING EXAMPLE
// ======================================================

type Brew = {
  brewTime: number;
};

const coffee = {
  brewTime: 5,
  beans: "Arabica",
};

// Valid because `coffee` contains `brewTime`

const chaiBrew: Brew = coffee;

console.log(chaiBrew);



// ======================================================
// 6. NESTED OBJECTS (VERY IMPORTANT)
// ======================================================

// Nested objects are extremely common in:
// - APIs
// - Databases
// - E-commerce systems
// - User profiles

type Item = {
  name: string;
  quantity: number;
};

type Address = {
  street: string;
  pin: number;
};

type Order = {
  id: string;
  items: Item[];
  address: Address;
};

const myOrder: Order = {
  id: "@123xy12",

  items: [
    {
      name: "Laptop",
      quantity: 2,
    },
  ],

  address: {
    street: "Noida",
    pin: 201301,
  },
};

console.log(myOrder);



// ======================================================
// 7. PARTIAL<T>
// ======================================================

// Partial<T>
// makes ALL properties optional.

type Chai = {
  name: string;
  price: number;
  isHot: boolean;
};

// Useful for:
// - update APIs
// - PATCH requests
// - partial form updates

const updateChai = (updates: Partial<Chai>) => {
  console.log(updates);
};

// Valid because Partial makes properties optional

updateChai({
  price: 150,
});



// ======================================================
// 8. REQUIRED<T>
// ======================================================

// Required<T>
// converts ALL optional properties into required properties.

type ChaiOrder = {
  name?: string;
  quantity?: number;
};

function placeOrder(order: Required<ChaiOrder>) {
  console.log(order);
}

// Now ALL properties become mandatory

placeOrder({
  name: "Lemon Tea",
  quantity: 1,
});



// ======================================================
// 9. PICK<T>
// ======================================================

// Pick<T>
// helps us select only needed properties.

type FullChai = {
  name: string;
  price: number;
  isHot: boolean;
  ingredients: string[];
};

// Pick only:
// - name
// - price

type BasicChaiInfo = Pick<
  FullChai,
  "name" | "price"
>;

const chaiInfo: BasicChaiInfo = {
  name: "Green Tea",
  price: 145,
};

console.log(chaiInfo);



// ======================================================
// 10. OMIT<T>
// ======================================================

// Omit<T>
// removes unwanted properties.

type SecretChai = {
  name: string;
  price: number;
  isHot: boolean;
  secretIngredients: string[];
};

// Remove:
// secretIngredients

type PublicChai = Omit<
  SecretChai,
  "secretIngredients"
>;

const newChai: PublicChai = {
  name: "Green Tea",
  price: 123,
  isHot: true,
};

console.log(newChai);



// ======================================================
// IMPORTANT INTERVIEW NOTES
// ======================================================

// 1. TypeScript uses Structural Typing
//
// Objects are checked by structure,
// not by exact type name.


// 2. Partial<T>
//
// Makes all properties optional.


// 3. Required<T>
//
// Makes all properties required.


// 4. Pick<T>
//
// Selects only needed properties.


// 5. Omit<T>
//
// Removes unwanted properties.


// 6. Type aliases are heavily used in:
// - React props
// - API responses
// - Database models
// - DTOs
// - Backend architecture



// ======================================================
// FINAL TAKEAWAY
// ======================================================

// Objects are the FOUNDATION of TypeScript.
//
// Almost everything in real-world TypeScript
// revolves around object typing.
//
// Mastering object typing means:
// ✅ better APIs
// ✅ scalable applications
// ✅ safer backend code
// ✅ cleaner React components
// ✅ strong database architecture