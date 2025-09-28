let array = ["apple", "banana", "orange", "grape", "kiwi"];

let person = {
  firstName: "Nino",
  lastName: "Beridze",
  age: 25
};

console.log("Array Elements (forEach):");
array.forEach((item, index) => {
  console.log(`${index}: ${item}`);
});

console.log("Object Properties (Object.entries + for...of):");
for (const [key, value] of Object.entries(person)) {
  console.log(`${key}: ${value}`);
}
