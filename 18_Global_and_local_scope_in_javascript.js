/**
 * 🌐 JAVASCRIPT SCOPE & HOISTING: THE DEFINITIVE GUIDE
 * ---------------------------------------------------
 * Understanding how variables are stored and accessed in memory.
 */

// 1. GLOBAL SCOPE
// Variables declared outside any function or block.
// Accessible EVERYWHERE in the code.
let globalVar = "I am Global";

function checkGlobal() {
  console.log(globalVar); // ✅ Accessible inside functions
}

// 2. LOCAL / FUNCTION SCOPE
// Variables declared inside a function are NOT accessible outside.
function localExample() {
  let localMsg = "I am hidden";
  console.log(localMsg); // ✅ Works here
}
// console.log(localMsg); // ❌ Error: localMsg is not defined

// 3. BLOCK SCOPE (let & const)
// Introduced in ES6. Variables inside {} (if, for, while) stay inside.
if (true) {
  let blockVariable = "I stay in this block";
  var oldVariable = "I leak out!";
}
// console.log(blockVariable); // ❌ Error: Block scoped
console.log(oldVariable); // ✅ Works! (var is NOT block scoped)

// 4. NESTED SCOPE (The Ice-Cream Rule 🍦)
// Rule: Children (inner functions) can access parents' variables.
// Parents (outer functions) CANNOT access children's variables.

function parent() {
  const parentName = "Hardeep";

  function child() {
    const platform = "YouTube";
    console.log(parentName); // ✅ Child can see Parent (Inheritance)
  }

  // console.log(platform); // ❌ Parent cannot see Child's private variable
  child();
}

// 5. HOISTING (The Memory Phase)
// JS moves declarations to the top of their scope before execution.

// Example A: Function Declaration (Fully Hoisted)
console.log(addOne(5)); // ✅ Works! Result: 6
function addOne(num) {
  return num + 1;
}

// Example B: Function Expression (NOT Hoisted)
// console.log(addTwo(5)); // ❌ Error: Cannot access before initialization
const addTwo = function (num) {
  return num + 2;
};

// 6. TEMPORAL DEAD ZONE (TDZ)
// With 'let' and 'const', variables are hoisted but stay in TDZ
// until the code actually reaches the initialization line.

// console.log(score); // ❌ ReferenceError (TDZ)
let score = 100;

console.log(points); // ✅ Output: undefined (var doesn't have TDZ)
var points = 50;

/**
 * 📝 SUMMARY TABLE:
 * -------------------------------------------------------
 * | Keyword | Scope    | Hoisting | Can Re-declare? |
 * |---------|----------|----------|-----------------|
 * | var     | Function | Yes (und)| Yes             |
 * | let     | Block    | Yes (TDZ)| No              |
 * | const   | Block    | Yes (TDZ)| No              |
 * -------------------------------------------------------
 */
