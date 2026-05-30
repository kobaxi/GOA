console.log("დავალება 1");
const arr1 = [1, 2, 3, 4, 5];
const newArr1 = [...arr1, 6];
console.log(newArr1);

console.log("დავალება 2");
function mergeArrays(a, b) {
  const merged = [...a, ...b];
  console.log(merged);
}
mergeArrays([1, 2], [3, 4]);

console.log("დავალება 3");
function sumAll(...nums) {
  return nums.reduce((acc, val) => acc + val, 0);
}
console.log(sumAll(1, 2, 3, 4, 5));

console.log("დავალება 4");
const arr2 = [10, 20, 30];
const newArr2 = [...arr2, ...arr2];
console.log(newArr2);

console.log("დავალება 5");
function createUser(name, age, ...restInfo) {
  console.log({ name, age, additional: restInfo });
}
createUser("გიორგი", 25, "თბილისი", "დეველოპერი");

console.log("დავალება 6");
const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const merged = [...a1, ...a2];
console.log(merged);

console.log("დავალება 7");
function mergeObjects(...objs) {
  return objs.reduce((acc, obj) => ({ ...acc, ...obj }), {});
}
const objA = { a: 1 };
const objB = { b: 2 };
const objC = { c: 3 };
console.log(mergeObjects(objA, objB, objC));

console.log("დავალება 8");
function concatStrings(...strings) {
  return strings.join(" ");
}
console.log(concatStrings("გამარჯობა", "როგორ", "ხარ?"));

console.log("დავალება 9");
const arr9 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const firstFive = [...arr9.slice(0, 5)];
console.log(firstFive);

console.log("დავალება 10");
function printAll(...args) {
  args.forEach((item, i) => console.log(`Arg ${i + 1}:`, item));
}
printAll("a", "b", "c");

console.log("დავალება 11");
const obj11 = { x: 1, y: 2, z: 3 };
const newObj11 = { ...obj11, w: 4 };
console.log(newObj11);

console.log("დავალება 12");
const arr12 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const doubled = [...arr12.map(x => x * 2)];
console.log(doubled);

console.log("დავალება 13");
function combineObjs(...objs) {
  return Object.assign({}, ...objs);
}
console.log(combineObjs({ a: 1 }, { b: 2 }, { c: 3 }));

console.log("დავალება 14");
const arr14 = [45, 88, 12];
function getMax(arr) {
  return Math.max(...arr);
}
console.log(getMax(arr14));

console.log("დავალება 15");
function userInfo(firstName, lastName, ...rest) {
  console.log("სახელი:", firstName);
  console.log("გვარი:", lastName);
  console.log("დამატებითი:", rest);
}
userInfo("ანა", "შერმადინი", "თბილისი", "25 წლის", "დეველოპერი");

console.log("დავალება 16");
function extendObject(obj) {
  return { ...obj, active: true, createdAt: new Date() };
}
console.log(extendObject({ name: "ლაშა", role: "admin" }));

console.log("დავალება 17");
const original = { name: "მარი", age: 22 };
const additional = { city: "ბათუმი", profession: "მასწავლებელი" };
const combined = { ...original, ...additional };
console.log(combined);

console.log("დავალება 18");
function getMinMax(...nums) {
  return {
    min: Math.min(...nums),
    max: Math.max(...nums),
  };
}
console.log(getMinMax(5, 2, 9, 1, 7));

console.log("დავალება 19");
const arr19 = [1, 2, 3, 4, 5];
const everyFourth = [...arr19.filter((_, i) => i % 4 === 0)];
console.log(everyFourth);

console.log("დავალება 20");
const person = {
  name: "დათა",
  age: 27,
  address: "თბილისი, ჩუბინაშვილის ქუჩა",
  email: "data@gmail.com"
};
const { name, age } = person;
const newPerson = { name, age };
console.log(newPerson);