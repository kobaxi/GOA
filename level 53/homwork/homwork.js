//2
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
console.log("1-დან 10-მდე რიცხვების ჯამი არის:", sum);

//3
for (let i = 1; i <= 10; i++) {
  console.log(i + " - ის კვადრატი არის " + (i * i));
}

//4
let word = "გამარჯობა";
for (let i = 0; i < word.length; i++) {
  console.log(word[i]);
}

//5
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
