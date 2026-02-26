/**
 * 🌀 TOPIC: FOR LOOPS WITH BREAK & CONTINUE
 * -----------------------------------------
 * Loop ka matlab hai ek hi kaam ko baar-baar karwana.
 * 'break' aur 'continue' loops ke traffic control signals hain.
 */

// 1. BASIC FOR LOOP
// Sequence: Initialization -> Condition Check -> Body -> Increment
console.log("--- Basic Counting ---");
for (let i = 1; i <= 5; i++) {
    console.log(`Iteration number: ${i}`);
}


// 2. FOR LOOP WITH BREAK
// BREAK: Jaise hi 'break' hit hota hai, loop wahin khatam (terminate) ho jata hai.
console.log("\n--- Testing BREAK (Stop at 5) ---");
for (let index = 1; index <= 20; index++) {
    if (index === 5) {
        console.log("Detected 5. Breaking the loop now!");
        break; // Iske baad niche ka koi code nahi chalega aur loop exit ho jayega.
    }
    console.log(`Value of index is: ${index}`);
}


// 3. FOR LOOP WITH CONTINUE
// CONTINUE: Ye sirf current "chakkar" (iteration) ko skip karta hai aur agle par jump kar jata hai.
console.log("\n--- Testing CONTINUE (Skip 5) ---");
for (let index = 1; index <= 10; index++) {
    if (index === 5) {
        console.log("Detected 5. Skipping this one...");
        continue; // Isse 5 print nahi hoga, direct 6 par chala jayega.
    }
    console.log(`Value of index is: ${index}`);
}


// 4. REAL WORLD EXAMPLE: Array Search
const books = ["Maths", "Science", "JS-Mastery", "History", "Physics"];
console.log("\n--- Searching for JS-Mastery ---");

for (let i = 0; i < books.length; i++) {
    if (books[i] === "JS-Mastery") {
        console.log("Book Found: " + books[i]);
        break; // Mil gayi book! Ab aage check karne ki zaroorat nahi.
    }
    console.log("Checking: " + books[i]);
}


// 5. NESTED LOOPS (Loop ke andar loop)
console.log("\n--- Multiplication Table (Short) ---");
for (let i = 1; i <= 2; i++) {
    console.log(`Outer Loop (Table of ${i})`);
    for (let j = 1; j <= 10; j++) {
        // console.log(i + '*' + j + ' = ' + i*j);
    }
}

/**
 * 📝 SUMMARY NOTES:
 * 1. break = Loop se bahar nikal jao (Stop everything).
 * 2. continue = Sirf ye wala step skip karo, baaki loop chalne do.
 * 3. Scope = 'let' use karne se loop ka variable 'i' sirf loop ke andar hi rehta hai.
 */
