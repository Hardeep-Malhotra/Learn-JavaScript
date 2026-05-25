// ==========================================
// FILTER METHOD
// ==========================================

// filter() creates a NEW array based on a condition.
// It does NOT modify the original array.

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Example 1: Using filter to get numbers greater than 4

const newNums = myNums.filter((num) => {
  return num > 4; // condition
});

console.log(newNums);
// Output: [5, 6, 7, 8, 9, 10]

// ==========================================
// SAME LOGIC USING forEach
// ==========================================

// forEach does NOT return a new array.
// So we manually create an empty array.

const filteredNums = [];

myNums.forEach((num) => {
  if (num > 4) {
    filteredNums.push(num);
  }
});

console.log(filteredNums);

// ==========================================
// FILTER WITH OBJECT ARRAY
// ==========================================

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

// Example 1: Filter books by genre

const historyBooks = books.filter((book) => {
  return book.genre === "History";
});

console.log(historyBooks);

// Example 2: Filter books published after 2000

const modernBooks = books.filter((book) => {
  return book.publish >= 2000;
});

console.log(modernBooks);

// ==========================================
// MAP METHOD
// ==========================================

// map() transforms each element and returns a NEW array.

const updatedNums = myNums.map((num) => {
  return num + 10;
});

console.log(updatedNums);

// ==========================================
// METHOD CHAINING
// ==========================================

// We can chain multiple array methods together.

const chainedResult = myNums
  .map((num) => num * 10) // Multiply each number by 10
  .map((num) => num + 1) // Add 1 to each result
  .filter((num) => num >= 40); // Keep only values >= 40

console.log(chainedResult);

// ==========================================
// REDUCE METHOD
// ==========================================

// reduce() is used to accumulate values into a single result.

const sum = myNums.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0); // 0 is the initial value

console.log(sum);

// accumulator → stores the running result
// currentValue → current element of array
// initial value → starting point of accumulator

// ==========================================
// REDUCE WITH OBJECT ARRAY
// ==========================================

// Example: Calculate total publication year sum

const totalPublishYear = books.reduce((acc, book) => {
  return acc + book.publish;
}, 0);

console.log(totalPublishYear);
