// ==============================
// FOR...OF LOOP
// ==============================

// for...of loop is used to iterate over iterable values
// Iterable values include:
// Arrays, Strings, Maps, Sets, etc.

// Example 1: Iterating over an array

const arr1 = [1, 2, 3, 4, 5];

for (const value of arr1) {
  // This will print the actual value of each element
  console.log(value);
}

// ==============================
// FOR...IN LOOP
// ==============================

// for...in loop is mainly used to iterate over object keys

const myObject = {
  game1: "BGMI",
  game2: "Free Fire",
  game3: "Mario",
};

// This loop gives us the keys of the object
for (const key in myObject) {
  // To access the value, we use object[key]
  console.log(key, ":-", myObject[key]);
}

// ==============================
// FOR...IN ON ARRAYS
// ==============================

// When used on arrays, for...in gives the index (not the value)

const arr2 = ["Batman", "Spiderman", "Thor", "Iron Man"];

for (const index in arr2) {
  // This prints the index
  console.log("Index:", index);

  // This prints the actual value
  console.log("Value:", arr2[index]);
}

// ==============================
// MAP OBJECT
// ==============================

// Map is a special object that stores key-value pairs

const map = new Map();

map.set("IN", "India");
map.set("USA", "United States of America");
map.set("FR", "France");

// Map is iterable, so we use for...of (NOT for...in)

for (const [key, value] of map) {
  console.log(key, ":-", value);
}

// Note:
// for...in does NOT work properly on Map
// because Map is not a plain object

// ==============================
// HIGHER ORDER FUNCTION
// ==============================

// A Higher Order Function is a function that
// accepts another function as a parameter

const coding = ["js", "ruby", "java", "python", "cpp", "swift"];

// Example 1: Using normal function
coding.forEach(function (value) {
  console.log(value);
});

// Example 2: Using arrow function
coding.forEach((value) => {
  console.log(value);
});

// Example 3: Passing function reference

const printValue = (value) => {
  console.log(value);
};

// We only pass the function reference (not calling it)
coding.forEach(printValue);

// ==============================
// forEach PARAMETERS
// ==============================

// forEach provides 3 parameters:
// 1. item  → current value
// 2. index → current index
// 3. array → entire array

coding.forEach((item, index, array) => {
  console.log("Item:", item);
  console.log("Index:", index);
  console.log("Full Array:", array);
});

// ==============================
// IMPORTANT DIFFERENCE
// ==============================

// for / for...of  → break and continue are allowed
// forEach         → break and continue are NOT allowed
