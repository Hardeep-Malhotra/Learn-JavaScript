/**
 * 🧠 HOW JAVASCRIPT EXECUTES CODE (Interview Perspective)
 * -------------------------------------------------------
 * JavaScript is a "Synchronous Single-Threaded" language.
 * This means it executes one command at a time in a specific order.
 */

// --- SAMPLE CODE TO ANALYZE ---
let val1 = 10;
let val2 = 5;
function addNum(num1, num2) {
  let total = num1 + num2;
  return total;
}
let result1 = addNum(val1, val2);
let result2 = addNum(10, 2);

/**
 * 🕒 PHASE 1: CREATION PHASE (Memory Phase)
 * -----------------------------------------
 * Before running any code, JS creates a "Global Execution Context".
 * 1. 'this' is bound to the Global Object (Window in browser, {} in Node).
 * 2. Memory is allocated for variables and functions:
 * - val1 -> undefined
 * - val2 -> undefined
 * - addNum -> [Function Definition / complete code]
 * - result1 -> undefined
 * - result2 -> undefined
 */

/**
 * 🏃 PHASE 2: EXECUTION PHASE (Code Phase)
 * -----------------------------------------
 * Now, JS goes line-by-line:
 * 1. val1 = 10
 * 2. val2 = 5
 * 3. Line 11 (Function definition) is skipped because memory was already allocated.
 * 4. Line 15 (result1): A NEW Execution Context is created for 'addNum'!
 */

/**
 * 📦 THE "MINI" EXECUTION CONTEXT (For Functions)
 * -----------------------------------------------
 * Every time a function is called, a new box (Sandbox) is created.
 * It has its own:
 * 1. Memory Phase (num1: undefined, num2: undefined, total: undefined)
 * 2. Execution Phase (num1: 10, num2: 5, total: 15)
 * 3. Return Phase: The value (15) is sent back to the Global Execution Context.
 * 4. DELETION: After returning, this mini-context is DESTROYED immediately.
 */

// ==========================================
// 🏗️ THE CALL STACK (LIFO: Last In, First Out)
// ==========================================
/**
 * Think of Call Stack as a "Stack of Plates".
 * * 1. Initially, the 'Global Execution Context' (GEC) is pushed at the bottom.
 * 2. When addNum() is called, it is pushed on TOP of GEC.
 * 3. Once addNum() finishes, it is POPPED (removed) from the stack.
 * 4. If there was a function inside addNum(), that would be pushed on top of it.
 * * ⚠️ STACK OVERFLOW: If you call a function inside itself infinitely (Recursion),
 * the stack gets full and the browser crashes.
 */

// --- INTERVIEW KEYWORDS TO USE ---
// 1. "Memory Creation Phase" vs "Execution Phase"
// 2. "LIFO" (Last In, First Out) for Call Stack
// 3. "Thread of Execution" (Step by step line execution)
// 4. "Variable Environment" (Where memory is stored)

console.log("Execution phases are the secret to understanding Hoisting!");
