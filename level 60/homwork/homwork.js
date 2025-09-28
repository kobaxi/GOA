
// 1.
const university = {
  name: "Georgian Technical University",
  departments: 10,
  website: "https://gtu.ge",
  ratings: {
    student1: 85,
    student2: 90,
    student3: 78,
  }
};

console.log("=== უნივერსიტეტი ===");

for (let key in university) {
  console.log(`${key}:`, university[key]);
}

console.log("Has scholarship?", university.hasOwnProperty('scholarship'));

Object.assign(university, { studentsCount: 4500 });
console.log("After adding studentsCount:", university);

Object.freeze(university);
university.name = "New University";
university.studentsCount = 5000;
console.log("After freeze and modification attempt:", university);

console.log("Is frozen?", Object.isFrozen(university));



// 2.
const sportsClub = {
  clubName: "Tbilisi Tigers",
  sportType: "Football",
  foundedYear: 1998,
  achievements: {
    title1: "National Champion 2010",
    title2: "Cup Winner 2015",
    title3: "League Winner 2020"
  }
};

console.log("\n=== სპორტული კლუბი ===");


console.log("Properties:", Object.keys(sportsClub));

console.log("Values:", Object.values(sportsClub));


console.log("Has sponsors?", sportsClub.hasOwnProperty('sponsors'));


Object.assign(sportsClub, { stadiumCapacity: 15000 });
console.log("After adding stadiumCapacity:", sportsClub);


Object.freeze(sportsClub);
sportsClub.clubName = "Changed Name"; 
sportsClub.stadiumCapacity = 20000; 
console.log("After freeze and modification attempt:", sportsClub);


// 3.

// 1.

console.log("=== Object.is() ===");
console.log(Object.is(25, 25));
console.log(Object.is('hello', 'world'));
console.log(Object.is(NaN, NaN));
console.log(Object.is(+0, -0));

// 2.


const obj1 = { name: "Nika" };
Object.preventExtensions(obj1);

obj1.age = 30;
console.log("\n=== Object.preventExtensions() ===");
console.log(obj1);
console.log(obj1.age);

obj1.name = "Giorgi";
console.log(obj1.name);

// 3.

console.log("\n=== Object.isExtensible() ===");
const obj2 = { brand: "Toyota" };
console.log(Object.isExtensible(obj2)); 

Object.preventExtensions(obj2);
console.log(Object.isExtensible(obj2));

// 4. 

console.log("\n=== Object.assign() ===");
const target = { a: 1, b: 2 };
const source1 = { b: 3, c: 4 };
const source2 = { d: 5 };

Object.assign(target, source1, source2);
console.log(target);
