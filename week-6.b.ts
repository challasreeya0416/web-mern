// Q6b_functions.ts – TypeScript Function Parameter and Return Types
// Compile: tsc Q6b_functions.ts
// Run:     node Q6b_functions.js

// ── Function with parameter types and return type ─────────────

// Returns a number
function add(a: number, b: number): number {
  return a + b;
}

// Returns a string
function greet(name: string): string {
  return "Hello, " + name + "!";
}

// Returns a boolean
function isAdult(age: number): boolean {
  return age >= 18;
}

// Returns void (no return value)
function printMessage(msg: string): void {
  console.log("Message:", msg);
}

// Optional parameter (age is optional)
function studentInfo(name: string, age?: number): string {
  if (age) {
    return name + " is " + age + " years old.";
  }
  return name + " (age not provided)";
}

// Default parameter
function power(base: number, exp: number = 2): number {
  return Math.pow(base, exp);
}

// ── Output ────────────────────────────────────────────────────
console.log("Add 5 + 3 =",          add(5, 3));
console.log(greet("Ravi"));
console.log("Is 20 adult?",         isAdult(20));
console.log("Is 15 adult?",         isAdult(15));
printMessage("TypeScript is great!");
console.log(studentInfo("Priya", 21));
console.log(studentInfo("Karthik"));
console.log("2 power 3 =",          power(2, 3));
console.log("5 power 2 (default) =", power(5));
