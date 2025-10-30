// /d:/Typescript/src/Primitives.ts
// Examples of all primary TypeScript/JavaScript primitive types and common usage.

// 1) boolean
let isDone: boolean = false;
isDone = true;

// 2) number (decimal, hex, binary, octal)
let decimal: number = 42;
let hex: number = 0x2a;
let binary: number = 0b101010;
let octal: number = 0o52;
let nanValue: number = NaN;
let infiniteValue: number = Infinity;

// 3) bigint (requires ES2020+ in runtime/tsconfig)
const huge: bigint = 9007199254740991n; // note the trailing `n`
const bigSum: bigint = huge + 1n;

// 4) string (single, double, template literals)
let single: string = "hello";
let double: string = "world";
let age: number = 30;
let greeting: string = `Hi, I am ${age} years old`;

// 5) symbol (unique, optionally with a description)
const s1: symbol = Symbol("id");
const s2: symbol = Symbol("id");
const same = s1 === s2; // false

// global symbols
const gs1 = Symbol.for("global");
const gs2 = Symbol.for("global");

// 6) null and undefined (with strictNullChecks: true you must opt-in)
let u: undefined = undefined;
let n: null = null;

// variables that may hold a value or null/undefined
let maybeNumber: number | null = null;
maybeNumber = 5;

// 7) void (typically for functions that do not return a value)
function logMessage(msg: string): void {
  console.log(msg);
}

// 8) never (functions that never return / always throw or loop)
function throwError(message: string): never {
  throw new Error(message);
}
function infiniteLoop(): never {
  while (true) {}
}

// 9) literal types (string, number, boolean literals)
type Direction = "up" | "down" | "left" | "right";
const dir: Direction = "up";

type OneTwoThree = 1 | 2 | 3;
const numLiteral: OneTwoThree = 2;

type Truth = true | false;
const t: Truth = true;

// 10) unions involving primitives
type Primitive = string | number | boolean | bigint | symbol | null | undefined;
function stringify(x: Primitive): string {
  if (typeof x === "symbol") return x.toString();
  return String(x);
}

// 11) type narrowing with typeof
function process(input: string | number | boolean) {
  if (typeof input === "string") {
    return input.toUpperCase();
  }
  if (typeof input === "number") {
    return input * 2;
  }
  return !input; // boolean case
}

// 12) const assertions to get literal types
const constStr = "fixed" as const; // type is "fixed"
const constArr = [1, 2] as const; // type readonly [1, 2]

// 13) primitives in arrays and tuples
const strings: string[] = ["a", "b", "c"];
const mixedArrays: (string | number)[] = ["a", 1, "b", 2];
const tuple: [number, string] = [1, "one"];

// 14) using primitives in interfaces / type aliases
type UserId = string | number;
interface User {
  id: UserId;
  name: string;
  active: boolean;
}

// Example usage
const user: User = { id: "u123", name: "Alice", active: true };
logMessage(`User ${user.name} active: ${user.active}`);
console.log(stringify(s1));
