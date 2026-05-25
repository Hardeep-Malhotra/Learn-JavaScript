/**
 * 📂 THE ULTIMATE STRINGS CHEAT SHEET (All Useful Methods)
 * ---------------------------------------------------------
 */

const myName = "  Hardeep Singh  "; // Extra spaces and hyphens for testing

// 1. BASICS & CLEANING
console.log(myName.length);        // Total length including spaces
console.log(myName.trim());        // "Hitesh-Chai-Code" (Removes start/end spaces)
console.log(myName.trimStart());   // Removes only front spaces
console.log(myName.trimEnd());     // Removes only end spaces

// 2. CASING
console.log(myName.toLowerCase()); // "  hitesh-chai-code  "
console.log(myName.toUpperCase()); // "  HITESH-CHAI-CODE  "

// 3. FINDING & CHECKING (Very Useful in Logic)
const browserUrl = "https://hardeep.com/Hardeep%20Singh";

console.log(browserUrl.includes("hardeep")); // true (Check if exists)
console.log(browserUrl.startsWith("https")); // true
console.log(browserUrl.endsWith(".com"));    // false (Ends with choudhary)
console.log(browserUrl.indexOf("h"));        // 8 (First occurrence)
console.log(browserUrl.lastIndexOf("h"));    // Last occurrence of 'h'

// 4. EXTRACTION (Cutting Strings)
const str = "JavaScript";
console.log(str.slice(0, 4));      // "Java" (Can take negative: str.slice(-6))
console.log(str.substring(0, 4));  // "Java" (Same as slice but no negative)
console.log(str.at(-1));           // "t" (Modern way to get last character)

// 5. MODIFYING (Replacement)
const price = "Rs 200, Rs 200, Rs 200";
console.log(price.replace("Rs", "$"));    // "$ 200, Rs 200..." (Only first one)
console.log(price.replaceAll("Rs", "$")); // "$ 200, $ 200, $ 200" (All occurrences)

// 6. STRING TO ARRAY (And Vice Versa)
const data = "Code-With-Hardeep";
const splittedData = data.split("-"); 
console.log(splittedData); // ["Code", "With", "Hardeep"] (Very useful for APIs)

// 7. PADDING (Formatting)
const lastFourDigits = "4422";
const maskedCard = lastFourDigits.padStart(16, "*"); 
console.log(maskedCard); // "************4422"

// 8. REPETITION
console.log("Code ".repeat(3)); // "Code Code Code "