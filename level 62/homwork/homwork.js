//Task 1:
function modifyArray(numsArray, strArray) {
  let combinedArray = numsArray.concat(strArray);
  combinedArray.copyWithin(4, 0, 3);
  combinedArray.fill("filled", 2, 5);
  combinedArray.pop();
  combinedArray.shift();
  combinedArray.unshift(100, 200);
  return combinedArray;
}

//Task 2:
function task2() {
  let people = [{ name: "Alice" }, { name: "Bob" }];
  let places = [{ city: "Paris" }, { city: "London" }];
  let mergedArray = people.concat(places);
  mergedArray.copyWithin(2, 0, 2);
  mergedArray.fill({ city: "New York" }, -2);
  mergedArray.pop();
  mergedArray.shift();
  mergedArray.unshift({ name: "Charlie" }, { name: "David" });
  return mergedArray;
}

//Task 3:
function task3() {
  let mixedArray = [1, 2, 3, "four", 5];
  let extendedArray = mixedArray.concat([true, false]);
  extendedArray.copyWithin(0, 3, 5); // Copy 'four', 5
  extendedArray.fill(0, 5); // Replace from index 5 to end
  extendedArray.pop();
  extendedArray.shift();
  extendedArray.unshift(null, undefined);
  return extendedArray;
}

//Task 4:
function comprehensiveArrayTask(arr1, arr2, arr3) {
  let mergedArray = arr1.concat(arr2);
  mergedArray.copyWithin(5, 0, 3);
  mergedArray.fill(0, 6);
  mergedArray.pop();
  mergedArray.shift();
  mergedArray.unshift(100, 200);
  mergedArray.splice(2, 2, ...arr3);
  let slicedArray = mergedArray.slice(-5);
  let resultString = slicedArray.join(',');
  return resultString;
}

//Task 5:
let students = ["Anna", "Ben"];
let grades = [90, 85];

function addStudent(name, grade) {
  students.unshift(name);
  grades.unshift(grade);
  return { students, grades };
}

function removeLastStudent() {
  students.pop();
  grades.pop();
  return { students, grades };
}

function replaceGrade(index, newGrade) {
  grades.splice(index, 1, newGrade);
  return grades;
}

function updateGrades(value) {
  return grades.fill(value);
}

//Task 6:
let playlist = ["Song A", "Song B", "Song C"];

function addSong(song) {
  playlist.unshift(song);
  return playlist;
}

function removeLastSong() {
  playlist.pop();
  return playlist;
}

function moveSongs() {
  playlist.copyWithin(playlist.length - 2, 0, 2);
  return playlist;
}

function combinePlaylists(secondPlaylist) {
  return playlist.concat(secondPlaylist);
}

// Task 7
let cartItems = ["Milk", "Bread"];
let prices = [1.99, 2.49];

function addItem(item, price) {
  cartItems.unshift(item);
  prices.unshift(price);
  return { cartItems, prices };
}

function removeFirstItem() {
  cartItems.shift();
  prices.shift();
  return { cartItems, prices };
}

function replaceItem(index, item, price) {
  cartItems.splice(index, 1, item);
  prices.splice(index, 1, price);
  return { cartItems, prices };
}

function createReceipt() {
  return cartItems.join(", ");
}

function applyDiscount(discount) {
  return prices.fill(discount);
}

// Task 8
let library = [
  { title: "Book A", copies: 3 },
  { title: "Book B", copies: 5 },
  { title: "Book C", copies: 2 }
];

function addBook(book) {
  library.push(book);
  return library;
}

function removeLastBook() {
  library.pop();
  return library;
}

function updateBookCopies(title, newCopies) {
  let index = library.findIndex(book => book.title === title);
  if (index !== -1) {
    library.splice(index, 1, { ...library[index], copies: newCopies });
  }
  return library;
}

function listBooks() {
  return library.map(book => book.title).join(", ");
}

function extractBooks() {
  return library.slice(0, 2);
}

function modifyBooks() {
  library.copyWithin(library.length - 1, 0, 1);
  return library;
}

function resetCopies(num) {
  return library.map(book => ({ ...book, copies: num }));
}

function removeFirstBook() {
  library.shift();
  return library;
}

function addFirstBook(book) {
  library.unshift(book);
  return library;
}
