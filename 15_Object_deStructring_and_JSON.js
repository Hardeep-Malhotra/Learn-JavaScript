/**
 * 📂 TOPIC: OBJECT DESTRUCTURING & JSON API (IN-DEPTH)
 * ---------------------------------------------------------
 */

const course = {
  courseName: "JavaScript Deep Dive",
  price: 999,
  courseInstructor: "Hitesh",
  details: {
    duration: "30 Hours",
    level: "Beginner to Pro",
  },
};

// ==========================================
// 1. OBJECT DESTRUCTURING (The Modern Way)
// ==========================================

// A. Basic Destructuring
// Extracting 'courseInstructor' and making it a standalone variable
const { courseInstructor } = course;
console.log(courseInstructor); // Output: Hitesh

// B. Renaming (Alias)
// If the key name is too long, rename it for ease of use
const { courseInstructor: instructor } = course;
console.log(instructor); // Output: Hitesh

// C. Default Values
// If a property might be missing in the object, provide a fallback (default)
const { rating = "Not Rated Yet" } = course;
console.log(rating); // Output: Not Rated Yet

// D. Nested Destructuring
// Extracting values from an object inside an object
const {
  details: { duration },
} = course;
console.log(duration); // Output: 30 Hours

/* 💡 WHY DESTRUCTURING?
   In React, we use it in Components: 
   const Navbar = ({companyName}) => { ... }
   It prevents us from writing 'props.companyName' or 'course.instructor' everywhere.
*/

// ==========================================
// 2. JSON API (The Data Format)
// ==========================================

/**
 * API (Application Programming Interface):
 * It's like a waiter. You (Frontend) ask for data, and the API (Waiter)
 * brings it from the Kitchen (Backend/Database).
 * * JSON: JavaScript Object Notation
 */

// A. JSON Structure vs JS Object
// In JS Object: keys don't need quotes.
// In JSON: Both Keys and Values (if strings) MUST be in double quotes ("").

/* JSON Example (Object Format):
{
    "id": 101,
    "username": "hardeep_pro",
    "isLoggedIn": true
}
*/

/* JSON Example (Array Format - Most Common in APIs):
[
    { "id": 1, "name": "A" },
    { "id": 2, "name": "B" },
    { "id": 3, "name": "C" }
]
*/

// ==========================================
// 3. IMPORTANT API RULES & PITFALLS
// ==========================================

// 1. JSON.stringify(): Converts a JS Object into a JSON String.
// ⚠️ WARNING: Functions inside an object are REMOVED during stringify.
const user = {
  name: "Hardeep",
  sayHi: function () {
    console.log("Hi");
  },
};
console.log(JSON.stringify(user)); // Output: {"name":"Hardeep"} (sayHi is gone!)

// 2. JSON.parse(): Converts a JSON String back into a JS Object.
const jsonStr = '{"name": "Hardeep", "age": 20}';
const obj = JSON.parse(jsonStr);
console.log(obj.name); // Output: Hardeep

// 3. Optional Chaining (?.) with APIs
// APIs take time to load. Always use '?' to avoid "Cannot read property" errors.
// console.log(apiData?.user?.name);

/**
 * 🛠️ TOOLS FOR API:
 * 1. JSON Formatter (Chrome Extension/Website): To make messy API data look clean.
 * 2. Random User API / Rick and Morty API: Great for practicing 'fetch'.
 */
