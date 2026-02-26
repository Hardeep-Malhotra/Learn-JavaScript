B. Object.freeze() 
// (Already covered in Part 1, but remember it stops all modifications)

// C. Object.create(proto)
// Used to create an object using an existing object as the prototype./**


// ==========================================
// 1. Object.freeze() - "The Lock" 🔒
// ==========================================

const userConfig = {
    apiKey: "12345_ABCDE",
    environment: "production"
};

// Locking the object
Object.freeze(userConfig);

// Attempting to change
userConfig.apiKey = "HACKED_KEY"; 
userConfig.newSecret = "Hidden"; // Trying to add new property
delete userConfig.environment;   // Trying to delete

console.log(userConfig); 
// Output: { apiKey: "12345_ABCDE", environment: "production" }
// Result: No change, No error (in non-strict mode), but SILENTLY IGNORED.

/* 💡 Why use it? 
   Jab aap nahi chahte ki koi aapke database credentials 
   ya global settings ko code mein aage jaakar modify kare.
*/


// ==========================================
// 2. Object.create() - "The Prototype Bridge" 🌉
// ==========================================

// Step 1: Create a 'Template' or Prototype object
const userBlueprint = {
    printIntro: function() {
        console.log(`My name is ${this.name}. Am I a human? ${this.isHuman}`);
    }
};

// Step 2: Create a new object using the blueprint
// Object.create(proto) creates a link between 'me' and 'userBlueprint'
const me = Object.create(userBlueprint);

me.name = "Hardeep"; // "me" has its own name
me.isHuman = true;   // "me" has its own isHuman status

me.printIntro(); 
// Output: My name is Hardeep. Am I a human? true

/* 💡 Why use it? 
   Instead of copying the whole object, it creates a link (Prototype). 
   If 'me' doesn't find a property, it looks into 'userBlueprint'. 
   This is the base of Singleton and Prototypal Inheritance in JS.
*/

console.log(Object.getPrototypeOf(me) === userBlueprint); // true