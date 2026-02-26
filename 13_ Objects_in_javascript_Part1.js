/**
 * 📂 TOPIC: JAVASCRIPT OBJECTS (PART 1)
 * ---------------------------------------------------------
 * Definition: Objects are collections of related data/functionality.
 * They store data in Key-Value pairs.
 */

// 1. SYMBOL DECLARATION (Interview Favorite)
// If you want to use a Symbol as an object key, declare it first.
const mySym = Symbol("key1");

// 2. OBJECT LITERAL DECLARATION
const jsUser = {
  name: "Hardeep Singh",
  "full name": "Hardeep Singh Pro", // Keys with spaces must be in strings
  age: 20,
  [mySym]: "myKey1", // [SQUARE BRACKETS] are mandatory to use a Symbol as a key
  location: "USA",
  email: "hardeep@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

// 3. ACCESSING DATA
console.log(jsUser.email); // Method 1: Dot notation (Most common)
console.log(jsUser["email"]); // Method 2: Square bracket (Required for special cases)
console.log(jsUser["full name"]); // Mandatory: Dot notation fails if the key has spaces
console.log(jsUser[mySym]); // Accessing the Symbol key correctly

// 4. UPDATING & IMMUTABILITY
jsUser.email = "hardeep@microsoft.com"; // Updating a value

// Object.freeze(jsUser);               // After this, no changes will be applied to the object
jsUser.email = "hardeep@chatgpt.com"; // This change will be ignored (no error thrown)

// 5. ADDING FUNCTIONS (METHODS)
jsUser.greeting = function () {
  console.log("Hello JS User!");
};

jsUser.greetingTwo = function () {
  // 'this' refers to the CURRENT object (jsUser)
  // We use 'this' to access other properties inside the same object
  console.log(`Hello JS User, your name is: ${this.name}`);
};

// Calling Functions
// Note: greeting (just a reference) vs greeting() (executes the function)
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

/**
 * 🧠 EXTRA IN-DEPTH CONCEPTS (Essential Knowledge)
 * ---------------------------------------------------------
 */

// A. Check if Property Exists
// Returns true/false if the object has a specific key
console.log(jsUser.hasOwnProperty("isLoggedIn")); // true

// B. Extracting All Keys or Values
// These return an ARRAY, which is very useful for loops.
console.log(Object.keys(jsUser)); // ['name', 'age', 'location'...]
console.log(Object.values(jsUser)); // ['Hardeep Singh', 20, 'USA'...]

// C. Object Entries
// Returns an array of [key, value] pairs
console.log(Object.entries(jsUser));

/**
 * ⚠️ INTERVIEW TIP:
 * Question: When is a Singleton object created?
 * Answer: A Singleton is created when using a Constructor (e.g., 'new Object()' or 'Object.create()').
 * 'Object Literals' (the {} method) do NOT create Singletons.
 */
