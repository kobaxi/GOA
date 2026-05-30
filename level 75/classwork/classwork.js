//1
const arr = [10, 20, 30, 40, 50];
const obj = {
  name: "მარიამ",
  age: 29,
  city: "ბათუმი",
  email: "mariam@example.com",
  job: "დიზაინერი"
};
const [a, b, c] = arr;
const { name, age, city, email, job } = obj;

console.log("დავალება 1:");
console.log(a, b, c);
console.log(name, age, city, email, job);

//2

//1
const baseArr = [1, 2, 3, 4, 5];
const extendedArr = [...baseArr, 6, 7, 8, 9, 10];
console.log("დავალება 2 - ნაწილი 1:");
console.log(extendedArr);


function showArgs(...args) {
  console.log("დავალება 2 - ნაწილი 2:");
  console.log(args);
}
showArgs(100, 200, 300, 400, 500);

//3 
console.log("დავალება 3 - ახსნა:");
console.log(`
Rest operator გამოიყენება ფუნქციის პარამეტრებში, რათა შეგროვდეს უცნობი რაოდენობის არგუმენტები მასივში.

Spread operator გამოიყენება მასივის ან ობიექტის დაშლაში, მაგალითად, სხვა მასივში/ობიექტში ჩასმისთვის.

მაგალითი:

function sum(...nums) { // rest
  return nums.reduce((a, b) => a + b, 0);
}

const arr = [1, 2, 3];
const newArr = [...arr, 4, 5]; // spread
`);
