function processFruits(fruits) {
  let citrus = fruits.slice(1, 3);

  let fruitString = fruits.join('-');

  console.log("Citrus Fruits:", citrus);

  return fruitString;
}

let fruits = ['apple', 'orange', 'lemon', 'banana', 'grape'];
let result = processFruits(fruits);

console.log("Final Result:", result);
