/**
 * 🚀 IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)
 * --------------------------------------------------
 * Definition: A function that runs as soon as it is defined.
 * Syntax: (function)()
 */

// 1. THE BASIC STRUCTURE
// The first () wraps the function to turn it into an expression.
// The second () invokes (calls) the function immediately.
(function () {
  console.log("I run immediately!");
})();

// 2. WHY USE IIFE? (The "Global Pollution" Problem)
/**
 * In large projects, many variables are declared in the Global Scope.
 * This can lead to naming conflicts (bugs).
 * IIFE creates a PRIVATE SCOPE so its internal variables don't leak out.
 */
(function () {
  const internalSecret = "12345";
  console.log("Private scope created. Global scope is safe.");
})();
// console.log(internalSecret); // ❌ Error: internalSecret is not defined

// 3. NAMED IIFE
// When you give a name to the function inside the IIFE.
(function connectToDatabase() {
  console.log("DB CONNECTION ESTABLISHED");
})();

// 4. ARROW FUNCTION IIFE (Modern Syntax)
(() => {
  console.log("Arrow function IIFE executed.");
})();

// 5. PASSING PARAMETERS TO IIFE
// You can pass arguments into the second set of parentheses.
((user) => {
  console.log(`Current active user: ${user}`);
})("Hardeep Singh");

/**
 * ⚠️ THE SEMICOLON (;) RULE - MOST IMPORTANT!
 * ------------------------------------------
 * JavaScript is often "smart" about semicolons, but NOT with IIFEs.
 * If you write two IIFEs one after another, you MUST end the first one with a semicolon.
 * * WRONG ❌:
 * (function(){})()
 * (function(){})() // This will cause a crash!
 * * RIGHT ✅:
 * (function(){})();
 * (function(){})(); // Works perfectly.
 */

// Example of multiple IIFEs correctly separated:
(function first() {
  console.log("First IIFE");
})();
(function second() {
  console.log("Second IIFE");
})();
