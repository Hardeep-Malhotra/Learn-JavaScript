/**
 * 📂 TOPIC: ARRAYS IN JAVASCRIPT (PART 1)
 * ---------------------------------------------------------
 * Definition: Arrays are objects that store a collection of items
 * under a single variable name. They are resizable and can contain
 * a mix of different data types.
 */

// 1. ARRAY DECLARATION
const myArr = [0, 1, 2, 3, 4, 5];
const myHeros = ["shaktiman", "naagraj"];
const myArr2 = new Array(1, 2, 3, 4); // Using constructor

// 2. BASIC METHODS (Adding/Removing)
myArr.push(6); // Adds element to the END of the array
myArr.pop(); // Removes the LAST element of the array

myArr.unshift(9); // Adds element to the START (Shifts all indexes, can be slow)
myArr.shift(); // Removes the FIRST element of the array

// 3. SEARCHING & UTILITY
console.log(myArr.includes(9)); // Returns Boolean (true/false) if value exists
console.log(myArr.indexOf(3)); // Returns index of the value. Returns -1 if not found.

const newArr = myArr.join(); // Converts array to a STRING (comma-separated by default)
console.log(typeof newArr); // Output: "string"

// 4. THE INTERVIEW FAVORITE: SLICE vs SPLICE 🔥

// SLICE: Returns a copy of a section of an array.
// Does NOT modify the original array.
const myn1 = myArr.slice(1, 3);
console.log("Slice Result:", myn1); // Includes index 1 & 2 (Index 3 excluded)
console.log("Original Array after Slice:", myArr); // Original stays same

// SPLICE: Removes or replaces elements in the array.
// IT MODIFIES THE ORIGINAL ARRAY.
const myn2 = myArr.splice(1, 3);
console.log("Splice Result:", myn2); // Includes index 1, 2, AND 3
console.log("Original Array after Splice:", myArr); // Elements are REMOVED from original

/**
 * 🧠 KEY CONCEPTUAL NOTES:
 * 1. Type: Arrays are specialized "Objects". (typeof myArr === "object")
 * 2. Memory: They are stored in HEAP memory (Non-primitive).
 * 3. Copying: JS array-copy operations create "Shallow Copies"
 * (They share the same reference/memory address).
 */
