/**
 * 🚀 JAVASCRIPT FUNCTIONS & PARAMETERS: THE COMPLETE GUIDE
 * --------------------------------------------------------
 * This guide covers function declarations, expressions, parameters,
 * rest operators, and best practices for modern JS development.
 */

// 1. BASIC FUNCTION DECLARATION
// "Parameters" are placeholders defined in the function signature.
function sayHello(username) {
  if (!username) {
    return "Please provide a username";
  }
  return `Hello ${username}, welcome to the team!`;
}

// "Arguments" are the actual values passed during the call.
const message = sayHello("Hardeep");
console.log(message);

// 2. FUNCTION EXPRESSION (Functions as Variables)
// Functions in JS are "First Class Citizens" - they can be stored in variables.
const addTwoNumbers = function (num1, num2) {
  return num1 + num2;
};
console.log(addTwoNumbers(10, 20));

// 3. DEFAULT PARAMETERS
// If an argument is missing, the default value kicks in.
function loginUser(user = "Guest", status = "Offline") {
  return `${user} is currently ${status}`;
}

console.log(loginUser()); // "Guest is currently Offline"
console.log(loginUser("Hardeep", "Active")); // Overrides defaults

// 4. REST OPERATOR (...) - Handling Multiple Arguments
// Useful for Shopping Carts where you don't know the number of items.
// It bundles all remaining arguments into an Array.
function calculateCartPrice(val1, val2, ...prices) {
  // val1 = 200, val2 = 400, prices = [500, 2000, 150]
  return prices;
}

console.log(calculateCartPrice(200, 400, 500, 2000, 150));

// 5. PASSING OBJECTS TO FUNCTIONS
const userProfile = {
  username: "hardeep_dev",
  followers: 1200,
};

function handleObject(anyObject) {
  // Pro Tip: Always check if properties exist to avoid crashes
  return `User ${anyObject.username} has ${anyObject.followers} followers.`;
}

console.log(handleObject(userProfile));
// You can also pass a direct object literal
console.log(
  handleObject({
    username: "sam",
    followers: 0,
  }),
);

// 6. PASSING ARRAYS TO FUNCTIONS
const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
  return getArray[1];
}

console.log(returnSecondValue(myNewArray)); // 400

// 7. KEY INTERVIEW TIPS: RETURN VS CONSOLE.LOG
/**
 * - console.log(): Just prints to the screen. Does NOT store data.
 * - return: Stops function execution and sends data back to the caller.
 * Once 'return' is hit, no code below it inside the function will run.
 */

function logicTest() {
  console.log("This prints");
  return "This is returned";
  console.log("This will NEVER print"); // Unreachable code
}

// 8. SCOPE MINI-PREVIEW
// Variables defined inside a function are NOT accessible outside.
function scopeTest() {
  let internalVar = "I am hidden";
}
// console.log(internalVar); // Error: internalVar is not defined
