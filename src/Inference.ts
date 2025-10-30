// ========================================
// TypeScript Type Inference Examples
// ========================================

console.log("=== Basic Type Inference ===");

// 1. Basic primitive inference
let flag = true; // TypeScript infers: boolean
let count = 42; // TypeScript infers: number
let message = "Hello TypeScript"; // TypeScript infers: string

console.log(`flag: ${flag} (type: boolean)`);
console.log(`count: ${count} (type: number)`);
console.log(`message: ${message} (type: string)`);

console.log("\n=== Function Return Type Inference ===");

// 2. Function return type inference
function addition(a: number, b: number) {
  return a + b; // TypeScript infers return type: number
}

function greet1(name: string) {
  return `Hello, ${name}!`; // TypeScript infers return type: string
}

console.log(`addition(2, 5) = ${addition(2, 5)}`);
console.log(`greet("Mayukh") = ${greet("Mayukh")}`);

console.log("\n=== Array Type Inference ===");

// 3. Array type inference
let numbers = [1, 2, 3, 4, 5]; // TypeScript infers: number[]
let fruits = ["apple", "banana", "orange"]; // TypeScript infers: string[]
let mixed = [1, "hello", true]; // TypeScript infers: (string | number | boolean)[]

console.log(`numbers: [${numbers.join(", ")}] (type: number[])`);
console.log(`fruits: [${fruits.join(", ")}] (type: string[])`);
console.log(
  `mixed: [${mixed.join(", ")}] (type: (string | number | boolean)[])`
);

console.log("\n=== Object Type Inference ===");

// 4. Object type inference
let person = {
  name: "Mayukh",
  age: 25,
  isStudent: true,
}; // TypeScript infers: { name: string; age: number; isStudent: boolean }

console.log(`person:`, person);

console.log("\n=== Contextual Type Inference ===");

// 5. Contextual typing (based on usage)
let maybe: string | boolean; // Explicit union type

10 < 0 ? (maybe = "Hello") : (maybe = true);
console.log(`maybe: ${maybe} (type: string | boolean)`);

// Better example with contextual typing
const users = ["Alice", "Bob", "Charlie"];
const upperCaseUsers = users.map((user) => user.toUpperCase()); // 'user' is inferred as string
console.log(`upperCaseUsers: [${upperCaseUsers.join(", ")}]`);

console.log("\n=== Best Common Type Inference ===");

// 6. Best common type inference
let mixedArray = [0, 1, null, "hello"]; // TypeScript infers: (string | number | null)[]
console.log(
  `mixedArray: [${mixedArray.join(", ")}] (type: (string | number | null)[])`
);

console.log("\n=== When to Use Explicit Types vs Inference ===");

// Good: Let TypeScript infer when it's obvious
let autoInferred = "TypeScript is smart!";

// Good: Explicit type when inference isn't clear or for function parameters
function processData(data: unknown): string {
  if (typeof data === "string") {
    return data.toUpperCase();
  }
  return String(data);
}

console.log(`processData("hello"): ${processData("hello")}`);
console.log(`processData(123): ${processData(123)}`);
