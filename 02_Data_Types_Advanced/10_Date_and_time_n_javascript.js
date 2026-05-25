/**
 * 📂 TOPIC: DATE AND TIME IN DEPTH
 * ---------------------------------------------------------
 * Note: JavaScript Dates are calculated in milliseconds
 * from Jan 1, 1970 (Unix Epoch).
 */

let myDate = new Date();

// 1. DIFFERENT WAYS TO DISPLAY DATE
console.log(myDate.toString()); // Full details: Wed Feb 25 2026 23:20:15 GMT...
console.log(myDate.toDateString()); // Clean Date: Wed Feb 25 2026
console.log(myDate.toLocaleString()); // Numeric: 2/25/2026, 11:20:15 PM
console.log(myDate.toISOString()); // Standard format: 2026-02-25T23:20:15.000Z
console.log(typeof myDate); // "object" (Interview question!)

// 2. CREATING CUSTOM DATES
// Method A: Array style (Month 0 se start hota hai: 0=Jan)
let myCreatedDate = new Date(2026, 0, 26); // Jan 26, 2026
console.log(myCreatedDate.toDateString());

// Method B: String style (Month 01 se start hota hai)
let myNewDate = new Date("2026-01-14"); // YYYY-MM-DD format
console.log(myNewDate.toLocaleString());

// 3. GETTING INDIVIDUAL COMPONENTS
console.log(myDate.getFullYear()); // 2026
console.log(myDate.getMonth() + 1); // +1 isliye karte hain taaki user ko 0 na dikhe (Feb=2)
console.log(myDate.getDay()); // Day of the week (0=Sunday, 1=Monday...)

// 4. TIMESTAMPS (Very Important for Comparisons & Quizzes)
let myTimeStamp = Date.now(); // Current time in milliseconds
console.log(myTimeStamp);

// Getting timestamp of a specific date
console.log(myCreatedDate.getTime());

// Converting to SECONDS (Interview Fav: How to get seconds?)
console.log(Math.floor(Date.now() / 1000));

// 5. PRO TIP: TO-LOCALE-STRING CUSTOMIZATION
// Ye method sabse powerful hai date format karne ke liye
let formattedDate = myDate.toLocaleString("default", {
  weekday: "long", // "Wednesday"
  year: "numeric", // "2026"
  month: "2-digit", // "02"
});
console.log(formattedDate);
