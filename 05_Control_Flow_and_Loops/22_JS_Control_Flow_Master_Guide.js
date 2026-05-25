/**
 * 🚦 JAVASCRIPT CONTROL FLOW (Logic Building)
 * -------------------------------------------
 * How JS makes decisions based on conditions.
 */

// 1. BASIC IF-ELSE & OPERATORS
// <, >, <=, >=, == (value check), === (value + type check), !=, !==
const isUserLoggedIn = true;
const temperature = 41;

if (temperature < 50) {
  console.log("Temperature is less than 50");
} else {
  console.log("Temperature is greater than 50");
}

// 2. SWITCH STATEMENT (Best for multiple fixed values)
const month = "march";

switch (month) {
  case "jan":
    console.log("January");
    break;
  case "feb":
    console.log("February");
    break;
  case "march":
    console.log("March");
    break; // ⚠️ Don't forget break, or it executes all following cases!
  default:
    console.log("Default case matched");
    break;
}

// 3. TRUTHY vs FALSY VALUES (Interview Favorite ⭐)

// ❌ FALSY VALUES: false, 0, -0, BigInt 0n, "", null, undefined, NaN
// ✅ TRUTHY VALUES: "0", 'false', " ", [], {}, function(){} (Anything not falsy)

const userEmail = [];

if (userEmail) {
  console.log("Got user email"); // This will run because [] is truthy
}

// How to check if Array is empty?
if (userEmail.length === 0) {
  console.log("Array is empty");
}

// How to check if Object is empty?
const emptyObj = {};
if (Object.keys(emptyObj).length === 0) {
  console.log("Object is empty");
}

// 4. LOGICAL OPERATORS
// && (AND) -> All must be true
// || (OR)  -> At least one must be true

const userLoggedIn = true;
const debitCard = true;
if (userLoggedIn && debitCard) {
  console.log("Allow to buy course");
}

// 5. NULLISH COALESCING OPERATOR (??)
/**
 * Purpose: Special safety check for 'null' and 'undefined'.
 * It takes the first value if it's NOT null/undefined.
 */
let val1;
val1 = 5 ?? 10; // Output: 5
val1 = null ?? 10; // Output: 10 (fallback)
val1 = undefined ?? 15; // Output: 15
val1 = null ?? 10 ?? 20; // Output: 10

console.log(val1);

// 6. TERNARY OPERATOR (Short If-Else)
// Syntax: condition ? trueValue : falseValue;

const iceTeaPrice = 100;
iceTeaPrice >= 80 ? console.log("Expensive") : console.log("Cheap");

/**
 * 💡 INTERVIEW TIPS:
 * 1. Double Equal (==) vs Triple Equal (===): Always prefer === to avoid unexpected type conversion.
 * 2. Why use Nullish Coalescing (??)? To handle cases where 0 or "" might be valid values,
 * but you specifically want to catch null/undefined.
 */
