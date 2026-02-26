/**
 * 🌀 TOPIC: FOR, WHILE & DO-WHILE LOOPS
 * -----------------------------------------
 * Loop ka matlab hai ek hi kaam ko baar-baar karwana.
 * 'break' aur 'continue' loops ke traffic control signals hain.
 */

// ==========================
// 1. FOR LOOP (Standard)
// ==========================
// Sequence: Initialization -> Condition Check -> Body -> Increment
console.log("--- Basic For Loop Counting ---");
for (let i = 1; i <= 5; i++) {
  console.log(`Iteration number: ${i}`);
}

// ==========================
// 2. WHILE LOOP
// ==========================
/**
 * WHILE: Jab tak condition true hai, code chalta rahega.
 * Ye tab use karte hain jab humein fix nahi pata hota ki loop kitni baar chalega.
 */
console.log("\n--- Testing WHILE Loop ---");
let index = 0;
while (index <= 10) {
  console.log(`While loop value: ${index}`);
  index = index + 2; // Condition ko false karne ke liye increment zaroori hai
}

// ==========================
// 3. DO-WHILE LOOP
// ==========================
/**
 * DO-WHILE: Ye loop kam se kam EK BAAR zaroori chalta hai,
 * bhale hi condition pehli baar mein hi galat kyun na ho.
 */
console.log("\n--- Testing DO-WHILE Loop ---");
let score = 11;
do {
  console.log(`Score is ${score}`); // Ye 11 print karega, phir condition check karega
  score++;
} while (score <= 10);

// ==========================
// 4. CONTROL KEYWORDS: BREAK & CONTINUE
// ==========================

// BREAK: Jaise hi 'break' hit hota hai, loop wahin khatam (terminate) ho jata hai.
console.log("\n--- Testing BREAK (Stop at 5) ---");
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    console.log("Detected 5. Breaking the loop now!");
    break;
  }
  console.log(`Value is: ${i}`);
}

// CONTINUE: Ye sirf current "chakkar" (iteration) ko skip karta hai.
console.log("\n--- Testing CONTINUE (Skip 5) ---");
for (let i = 1; i <= 8; i++) {
  if (i === 5) {
    console.log("Detected 5. Skipping this one...");
    continue;
  }
  console.log(`Value is: ${i}`);
}

// ==========================
// 5. REAL WORLD EXAMPLE: Array Search
// ==========================
const books = ["Maths", "Science", "JS-Mastery", "History", "Physics"];
console.log("\n--- Searching for JS-Mastery ---");

let i = 0;
while (i < books.length) {
  if (books[i] === "JS-Mastery") {
    console.log("Book Found: " + books[i]);
    break;
  }
  console.log("Checking: " + books[i]);
  i++;
}

/**
 * 📝 SUMMARY NOTES:
 * 1. for = Jab count pata ho.
 * 2. while = Jab condition depend kare (Jab tak condition true hai).
 * 3. do-while = Kam se kam ek baar chalana ho.
 * 4. break = Loop se permanent exit.
 * 5. continue = Sirf current step skip.
 */
