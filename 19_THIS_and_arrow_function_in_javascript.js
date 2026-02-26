/**
 * 🌐 JAVASCRIPT SCOPE, THIS & ARROW FUNCTIONS
 * ---------------------------------------------------
 * Understanding context (this) and modern function syntax.
 */

// ==========================================
// 1. SCOPE & HOISTING (Review)
// ==========================================
let globalVar = "I am Global";

function parent() {
  const parentName = "Hardeep";
  function child() {
    console.log(parentName); // ✅ Lexical Scoping
  }
  child();
}

// ==========================================
// 2. THE 'THIS' KEYWORD
// ==========================================
// 'this' refers to the current context.

const user = {
  name: "Hardeep Singh",
  age: "21",
  welComeWebsite: function () {
    // Here, 'this' refers to the 'user' object
    console.log(`${this.name}, Welcome to my site.`);
    console.log(this);
  },
};

// user.welComeWebsite(); // 'this' is 'user'
// user.name = "Batman";
// user.welComeWebsite(); // 'this' is still 'user', but name changed

/**
 * ⚠️ IMPORTANT CONTEXT NOTES:
 * 1. In Global Space (Node.js): 'this' is an empty object {}.
 * 2. In Global Space (Browser): 'this' is the 'window' object.
 * 3. Inside a standard function: 'this' has many global properties.
 * 4. Inside an arrow function: 'this' does NOT have its own context.
 */

function checkThis() {
  let username = "Hardeep";
  // console.log(this.username); // ❌ undefined (this doesn't work like this in functions)
}

// ==========================================
// 3. ARROW FUNCTIONS (ES6)
// ==========================================

// --- Basic Syntax ---
const addTwoExplicit = (num1, num2) => {
  return num1 + num2; // "Explicit Return": Requires { } and 'return' keyword.
};

// --- Implicit Return (Single Line) ---
// If code is one line, remove { } and 'return'.
const addTwoImplicit = (num1, num2) => num1 + num2;

// --- Implicit Return with Parentheses ---
// Often used in React.
const addTwoParen = (num1, num2) => num1 + num2;

// --- Returning an Object ---
// To return an object implicitly, wrap it in parentheses ( ).
// Without ( ), JS thinks { } is the start of a function block.
const returnObj = () => ({ username: "Hardeep" });

console.log(returnObj());

// ==========================================
// 4. KEY DIFFERENCES SUMMARY
// ==========================================

/**
 * FEATURE          | REGULAR FUNCTION          | ARROW FUNCTION
 * -----------------|---------------------------|---------------------------
 * 'this' context   | Dynamic (based on caller) | Lexical (inherited from parent)
 * Hoisting         | Yes                       | No (treated as variables)
 * Arguments Object | Available                 | Not available
 * Constructors     | Can be used with 'new'    | Cannot be used with 'new'
 */

// 💡 Pro Tip: Use Arrow functions for simple logic and callbacks.
// Use Regular functions inside objects when you need to access 'this'.
