/**
 * 🛒 PART 1: REST OPERATOR (Handling Multiple Arguments)
 * When you don't know how many items a user will add to the cart.
 */

// CASE 1: Only accepts the first value
function buyCartOneParameter(item) {
  return item;
}
// console.log(buyCartOneParameter(100, 200, 300)); // Only 100

// CASE 2: The Rest Operator (...) - Bundles everything into an Array
function buyCartRest(...items) {
  return items;
}
console.log("Full Cart Array:", buyCartRest(100, 200, 300, 400));

// CASE 3: Mixed Parameters
// First two go to individual variables, the rest go to the array 'extraItems'
function buyCartMixed(item1, item2, ...extraItems) {
  console.log("Main Item 1:", item1);
  console.log("Main Item 2:", item2);
  console.log("Extra Items List:", extraItems);
}
buyCartMixed(100, 200, 300, 400, 500);

/**
 * 👤 PART 2: FUNCTIONS WITH OBJECTS
 */

const user = {
  name: "Hardeep Singh",
  age: 21,
};

function handleObject(anyObject) {
  // 💡 Pro Tip: Check if object exists to prevent "Cannot read property of undefined"
  if (!anyObject) return "No object provided";

  return `Username is ${anyObject.name} and User age is: ${anyObject.age}`;
}

console.log(handleObject(user));

// You can also pass the object directly (Literal)
console.log(handleObject({ name: "Sam", age: 25 }));

/**
 * 📊 PART 3: FUNCTIONS WITH ARRAYS
 */

const myArray = [100, 200, 300];

function processArray(getArray) {
  // Check if it's actually an array and has items
  if (!Array.isArray(getArray) || getArray.length === 0) {
    return "Not a valid array or empty";
  }

  // Accessing indices
  console.log("Index 0:", getArray[0]);
  console.log("Index 1:", getArray[1]);
  console.log("Index 2:", getArray[2]);

  return "Array processing complete!";
}

// Just call the function, don't wrap it in console.log if the function already logs.
processArray(myArray);

/**
 * 📝 KEY LEARNINGS:
 * 1. (...) Rest operator is used in parameters to collect data.
 * 2. When passing objects, the function parameter (anyObject) is just a name.
 * 3. Always validate data inside the function (if check) to avoid crashes.
 */
