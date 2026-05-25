/**
 * 📂 TOPIC: ARRAYS IN JAVASCRIPT (PART 2 - ADVANCED)
 * ---------------------------------------------------------
 */

const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["batman", "superman", "flash"];

// 1. PUSH vs CONCAT
// Push modifies the original array and can create nested arrays.
// Concat returns a NEW array and merges them properly.
const all_heros = marvel_heros.concat(dc_heros);
// Output: ["thor", "Ironman", "spiderman", "batman", "superman", "flash"]

// 2. THE SPREAD OPERATOR (...) - Most Recommended! 🔥
// Think of it like dropping a glass—it spreads all elements out.
const all_new_heros = [...marvel_heros, ...dc_heros];
// Why use this? You can merge more than 2 arrays easily.

// 3. FLAT (Cleaning up nested arrays)
// If you have arrays inside arrays, .flat() makes them a single array.
const messy_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const clean_array = messy_array.flat(Infinity); // Infinity solves all levels
console.log(clean_array);

// 4. DATA CONVERSION METHODS
console.log(Array.isArray("Hardeep")); // Checks if it's an array (False)

// Array.from(): Converts strings, sets, or NodeLists into Arrays.
console.log(Array.from("Hardeep")); // ['H', 'a', 'r', 'd', 'e', 'e', 'p']

// Interesting Case: Object to Array
// It returns an empty array [] because you must specify if you want an
// array of "keys" or "values".
console.log(Array.from({ name: "hardeep" }));

// 5. ARRAY.OF()
// Creates a new array from a set of elements or variables.
let score1 = 100,
  score2 = 200,
  score3 = 300;
console.log(Array.of(score1, score2, score3)); // [100, 200, 300]

/**
 * 🚀 EXTRA "PRO" METHODS (Add these to your knowledge)
 */

// A. Array.copyWithin()
// Copies part of an array to another location in the SAME array without changing length.
const arr = [1, 2, 3, 4, 5];
console.log(arr.copyWithin(0, 3, 4)); // [4, 2, 3, 4, 5]

// B. Array.fill()
// Fills all elements with a static value.
const empty = new Array(3).fill("CodeWithHardeep"); // ["CodeWithHardeep", "CodeWithHardeep", "CodeWithHardeep"]

// C. Array.reverse() & Array.sort()
// reverse() flips the array. sort() arranges alphabetically/numerically.
// Warning: Both modify the ORIGINAL array.

const numbers = [3, 1, 4, 2];

// --- Case 1: The Modern Way (Recommended) ---
const sortedCopy = numbers.toSorted((a, b) => a - b);
console.log(numbers);    // [3, 1, 4, 2] (Original is SAFE)
console.log(sortedCopy); // [1, 2, 3, 4] (New Array)

const reversedCopy = numbers.toReversed();
console.log(numbers);      // [3, 1, 4, 2] (Original is SAFE)
console.log(reversedCopy); // [2, 4, 1, 3] (New Array)


// --- Case 2: The Old Way (Be Careful) ---
numbers.sort((a, b) => a - b);
console.log(numbers); // [1, 2, 3, 4] (Original is CHANGED!)

numbers.reverse();
console.log(numbers); // [4, 3, 2, 1] (Original is CHANGED again!)