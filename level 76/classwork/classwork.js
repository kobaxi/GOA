//1

function Person(name, age, city, profession) {
  this.name = name;
  this.age = age;
  this.city = city;
  this.profession = profession;
}
const person1 = new Person("ნიკა", 25, "თბილისი", "დეველოპერი");
const person2 = new Person("ანა", 30, "ბათუმი", "დიზაინერი");

console.log(person1);
console.log(person2);

//2

class Person {
  constructor(name, age, city, profession) {
    this.name = name;
    this.age = age;
    this.city = city;
    this.profession = profession;
  }
}

const person3 = new Person("გიორგი", 28, "ქუთაისი", "ინჟინერი");
const person4 = new Person("თამარი", 35, "ზუგდიდი", "მასწავლებელი");

console.log(person3);
console.log(person4);

//3
class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  start() {
    console.log(`${this.brand} ${this.model} დაისტარტა`);
  }


  stop() {
    console.log(`${this.brand} ${this.model} გაითიშა`);
  }


  get info() {
    return `${this.brand} ${this.model}, ${this.year} წ.`;  
  }
}


const car1 = new Car("Toyota", "Camry", 2020);

car1.start();
car1.stop();
console.log(car1.info);