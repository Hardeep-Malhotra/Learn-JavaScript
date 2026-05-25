/**
 * 📂 TOPIC: NUMBERS IN JAVASCRIPT (In-Depth)
 * ---------------------------------------------------------
 */

// 1. PRIMITIVE vs OBJECT NUMBER
const score = 400; 
console.log(typeof score); // "number"
// Ye Stack memory mein store hota hai.

const balance = new Number(100); 
console.log(balance); // [Number: 100]
// Jab hum 'new' use karte hain, toh ye Object ban jata hai.
// Iska fayda? Humein iske saath bahut saare methods (Properties) mil jate hain.


// 2. CONVERTING TO STRING
// Kyu karte hain? Taaki hum String ke methods (like .length) use kar sakein.
console.log(balance.toString().length); // 3
console.log(typeof balance.toString()); // "string"


// 3. TO-FIXED (E-commerce ka king method)
// Jab aap bill banate ho, toh decimal ke baad kitne digits dikhane hain?
const pi = 3.14159;
console.log(pi.toFixed(2)); // "3.14" 
// Note: Ye hamesha ek STRING return karta hai.


// 4. TO-PRECISION (Tricky Concept)
// Ye total digits count karta hai (decimal se pehle aur baad ke mila kar).
const otherNumber = 123.8966;
console.log(otherNumber.toPrecision(3)); // "124" (Round off kar diya)
console.log(otherNumber.toPrecision(4)); // "123.9"
// Dhyan rakhein: Agar precision digit kam hai, toh ye exponential value dega.


// 5. TO-LOCALE-STRING (Reading large numbers)
const hundred = 1000000;
// Default (US style): 1,000,000
// Indian Style ('en-IN'): 10,00,000
console.log(hundred.toLocaleString('en-IN')); 


/**
 * 🧠 INTERVIEW SPECIAL (Important for you):
 * * Q: Number.MAX_VALUE aur Number.MIN_VALUE kya hai?
 * A: JS mein ek limit hai ki kitna bada ya chota number store ho sakta hai. 
 * Jab aapko usse bada number chahiye ho, tab 'BigInt' use hota hai.
 */

/**
 * 📂 TOPIC: MATH OBJECT IN JAVASCRIPT
 * ---------------------------------------------------------
 * Note: Math ek built-in object hai jisme saari mathematical 
 * properties aur methods hote hain.
 */

// 1. BASIC METHODS
console.log(Math.abs(-2));    // Output: 2 (Absolute value: Negative ko positive banata hai)

console.log(Math.round(4.6)); // Output: 5 (Standard round off: .5 se upar toh next number)
console.log(Math.ceil(4.2));  // Output: 5 (Ceiling/Chhat: Hamesha upar wala value dega)
console.log(Math.floor(4.9)); // Output: 4 (Floor/Zameen: Hamesha niche wala value dega)

console.log(Math.min(4, 3, 6, 8)); // Output: 3 (Sabse chota number)
console.log(Math.max(4, 3, 6, 8)); // Output: 8 (Sabse bada number)


// 2. MATH.RANDOM (The Core Concept)
// Math.random() hamesha 0 aur 1 ke beech value deta hai (Example: 0.15, 0.85)

console.log(Math.random()); 
console.log((Math.random() * 10) + 1); // Value 1 se 10 ke beech ayegi
console.log(Math.floor(Math.random() * 10) + 1); // Decimal hatane ke liye floor lagaya


// 3. THE UNIVERSAL FORMULA (Very Important)
// Jab humein ek specific range (Min to Max) ke beech random number chahiye:

const min = 10;
const max = 20;

/* Formula Breakdown:
   1. (max - min + 1) --> Range nikalne ke liye.
   2. * Math.random() --> Uss range mein koi decimal value lene ke liye.
   3. + min           --> Takki value 'min' se kam na ho.
   4. Math.floor()    --> Takki result ek single integer (Number) ho.
*/

const result = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(`Random value between 10 and 20 is: ${result}`);


// 4. OTHER USEFUL MATH PROPERTIES (Bonus)
console.log(Math.PI);    // 3.141592653589793
console.log(Math.sqrt(25)); // 5 (Square root)
console.log(Math.pow(2, 3)); // 8 (2 to the power 3)