/**
 * 📂 TOPIC: STACK AND HEAP MEMORY IN JAVASCRIPT
 *
 * ---------------------------------------------------------
 */

// 1. STACK MEMORY (Used for Primitive Types)
// Types: String, Number, Boolean, null, undefined, Symbol, BigInt
// Concept: Yahan "Copy" milti hai. Original value safe rehti hai.

let myYoutubeName = "hiteshchoudharydotcom";

let anotherName = myYoutubeName; // Yahan myYoutubeName ki ek COPY pass hui hai
anotherName = "Hardeep Singh"; // Humne copy ko change kiya

console.log(myYoutubeName); // Output: "hiteshchoudharydotcom" (Original change NAHI hua)
console.log(anotherName); // Output: "chai aur code" (Sirf copy change hui)

/* Visual Representation (Stack):
   [ anotherName | "chai aur code" ]  <-- Alag dabba
   [ myYoutubeName | "CodeWithHardeep" ] <-- Alag dabba
*/

// ---------------------------------------------------------

// 2. HEAP MEMORY (Used for Non-Primitive Types)
// Types: Objects, Arrays, Functions
// Concept: Yahan "Reference" (Address) milta hai. Original value change ho jati hai.

let userOne = {
  email: "user@google.com",
  upi: "user@ybl",
};

let userTwo = userOne; // Yahan Object copy nahi hua, sirf "Address" copy hua hai

// Ab agar userTwo mein kuch change karenge, toh userOne mein bhi dikhega
userTwo.email = "hardeep@google.com";

console.log(userOne.email); // Output: "hitesh@google.com" (Original change HO GAYA!)
console.log(userTwo.email); // Output: "hitesh@google.com"

/* Visual Representation (Heap & Stack):
   Stack: [ userOne ] ----\
                           >--> Dono ek hi "Heap Object" ko point kar rahe hain { email: "..." }
   Stack: [ userTwo ] ----/
*/

// ---------------------------------------------------------

/**
 * 🔥 QUICK REVISION SUMMARY:
 * * 1. Stack = Primitive = Copy milti hai.
 * 2. Heap = Non-Primitive = Reference (Address) milta hai.
 * 3. "=" use karne par:
 * - Primitives mein naya dabba banta hai.
 * - Objects/Arrays mein sirf purane dabbe ki chabi (key) pass hoti hai.
 */
