// Q6a_types.ts – TypeScript Simple and Special Types
// Compile: tsc Q6a_types.ts
// Run:     node Q6a_types.js

// ── Simple Types ─────────────────────────────────────────────
let studentId:   number  = 101;
let studentName: string  = "Ravi";
let isPresent:   boolean = true;

// ── Array and Tuple ──────────────────────────────────────────
let marks:       number[]        = [85, 90, 88];
let studentInfo: [number, string] = [101, "Ravi"];

// ── Special Types ────────────────────────────────────────────
let valueAny: any = "Hello";
valueAny = 123;              // allowed – any can hold any value

let valueUnknown: unknown = "TypeScript";

// void – used in functions that return nothing
function displayMessage(): void {
  console.log("Welcome to TypeScript");
}

// null and undefined
let emptyValue:   null      = null;
let notAssigned:  undefined = undefined;

// never – function that never returns (throws error)
function throwError(message: string): never {
  throw new Error(message);
}

// ── Output ───────────────────────────────────────────────────
console.log("Student ID:  ", studentId);
console.log("Student Name:", studentName);
console.log("Is Present:  ", isPresent);
console.log("Marks:       ", marks);
console.log("Student Info:", studentInfo);
displayMessage();
