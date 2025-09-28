// ===== Task 1:
function comprehensiveArrayTask(arr1, arr2, arr3) {
  let mergedArray = arr1.concat(arr2);
  mergedArray.copyWithin(5, 0, 3);
  mergedArray.fill(0, 6);
  mergedArray.pop();
  mergedArray.shift();
  mergedArray.unshift(100, 200);
  mergedArray.splice(2, 2, ...arr3);
  let slicedArray = mergedArray.slice(-5);
  return slicedArray.join(",");
}

// ===== Task 2:
let students = ["Alice", "Bob", "Charlie"];
let grades = [85, 92, 78];

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

function updateGrades(newGrade) {
  grades.fill(newGrade);
  return grades;
}

// ===== Task 3:
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

// ===== Task 4:
let cartItems = ["Apple", "Banana", "Carrot"];
let prices = [1.2, 0.5, 0.8];

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

function replaceItem(index, newItem, newPrice) {
  cartItems.splice(index, 1, newItem);
  prices.splice(index, 1, newPrice);
  return { cartItems, prices };
}

function createReceipt() {
  return cartItems.join(", ");
}

function applyDiscount(discountPrice) {
  prices.fill(discountPrice);
  return prices;
}

// ===== Task 5:
let library = [
  { title: "Book A", copies: 3 },
  { title: "Book B", copies: 5 },
  { title: "Book C", copies: 2 },
];

function addBook(book) {
  library.push(book);
  return library;
}

function removeLastBook() {
  library.pop();
  return library;
}

function updateBookCopies(title, copies) {
  let index = library.findIndex(b => b.title === title);
  if (index !== -1) {
    library.splice(index, 1, { ...library[index], copies });
  }
  return library;
}

function listBooks() {
  return library.map(b => b.title).join(", ");
}

function extractBooks() {
  return library.slice(0, 2);
}

function modifyBooks() {
  library.copyWithin(library.length - 1, 0, 1);
  return library;
}

function resetCopies(copies) {
  library.forEach((b, i) => library[i].copies = copies);
  return library;
}

function removeFirstBook() {
  library.shift();
  return library;
}

function addFirstBook(book) {
  library.unshift(book);
  return library;
}

// ===== Task 6:
function advancedArrayTask(arr1, arr2, nestedArray) {
  let combinedArray = arr1.concat(arr2);
  combinedArray.copyWithin(5, 0, 3);
  combinedArray.fill(0, 6);
  combinedArray.pop();
  combinedArray.shift();
  combinedArray.unshift(100, 200);
  combinedArray.splice(2, 2, 'x', 'y', 'z');
  let slicedArray = combinedArray.slice(-5);
  let joinedString = slicedArray.join(",");

  let flatArray = nestedArray.flat();
  let includes8 = flatArray.includes(8);
  let index9 = flatArray.indexOf(9);

  return { joinedString, flatArray, includes8, index9 };
}

// ===== Task 7:
function extendedArrayTask(arr1, arr2, nestedArray) {
  let combinedArray = arr1.concat(arr2);
  combinedArray.copyWithin(4, 0, 2);
  combinedArray.fill(0, 2, 4);
  combinedArray.pop();
  combinedArray.shift();
  combinedArray.unshift(10, 20);
  combinedArray.splice(2, 2, 30, 40);
  let slicedArray = combinedArray.slice(-3);
  let joinedString = slicedArray.join("-");

  let flatArray = nestedArray.flat();
  let includes9 = flatArray.includes(9);
  let index10 = flatArray.indexOf(10);
  let lastIndex9 = flatArray.lastIndexOf(9);

  flatArray.push(13);

  return {
    joinedString,
    flatArray,
    includes9,
    index10,
    lastIndex9
  };
}

// ===== Task 8:
function numbersArrayTask() {
  let numbers = [10, 20, 30, 40, 50];

  let newArray = numbers.concat([60, 70, 80]);
  numbers.copyWithin(numbers.length - 2, 1, 3);
  numbers.fill(100, 0, 3);
  let popped = numbers.pop();
  let shifted = numbers.shift();
  numbers.unshift(5, 15);
  let joined = numbers.join("-");
  let sliced = numbers.slice(1, 4);
  numbers.splice(1, 2, 200, 300);

  let nestedArr = [1, [2, 3], [4, [5, 6]]];
  let flatArr = nestedArr.flat(2);

  let includes50 = numbers.includes(50);
  let index30 = numbers.indexOf(30);
  let lastIndex20 = numbers.lastIndexOf(20);

  numbers.push(90, 100);

  return {
    newArray,
    numbers,
    popped,
    shifted,
    joined,
    sliced,
    flatArr,
    includes50,
    index30,
    lastIndex20
  };
}
