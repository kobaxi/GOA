
// 1
class Person {
  constructor(name, age, city, profession) {
    this.name = name;
    this.age = age;
    this.city = city;
    this.profession = profession;
  }
}

const person1 = new Person("ნიკა", 28, "თბილისი", "პროგრამისტი");
const person2 = new Person("ანა", 34, "ბათუმი", "დიზაინერი");

console.log("1) Person მაგალითები:");
console.log(person1);
console.log(person2);

// 2
class LocationInfo {
  constructor(city, country, interests) {
    this.city = city;
    this.country = country;
    this.interests = interests;
  }
}

const loc1 = new LocationInfo("თბილისი", "საქართველო", "ტექნოლოგია");
const loc2 = new LocationInfo("ბერლინი", "გერმანია", "მუსიკა");

console.log("\n2) LocationInfo მაგალითები:");
console.log(loc1);
console.log(loc2);

// 3
class User {
  constructor(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
  }

  getName() {
    return this.name;
  }

  showAge() {
    console.log("ასაკი:", this.age);
  }

  getDescription() {
    return `${this.name}, ${this.age} წლის, ქალაქი: ${this.city}`;
  }
}

const user1 = new User("დავითი", 25, "ქუთაისი");
console.log("\n3) User ფუნქციები:");
console.log(user1.getName());
user1.showAge();
console.log(user1.getDescription());

// 4
class Product {
  constructor(name, price, category) {
    this.name = name;
    this.price = price;
    this.category = category;
  }

  get info() {
    return `პროდუქტი: ${this.name}, ფასი: ${this.price}, კატეგორია: ${this.category}`;
  }
}

const prod = new Product("ლეპტოპი", 2500, "ტექნიკა");
console.log("\n4) Product info (getter):");
console.log(prod.info);

// 5
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  set updateTitle(newTitle) {
    this.title = newTitle;
  }

  get details() {
    return `წიგნი: ${this.title}, ავტორი: ${this.author}`;
  }
}

const book1 = new Book("ძველი სახელი", "ლევან ბერძენიშვილი");
console.log("\n5) Book მონაცემები (setter გამოყენებით):");
console.log(book1.details);
book1.updateTitle = "ახალი სახელი";
console.log(book1.details);

//  6
class Profile {
  constructor(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
  }

  getName() {
    return this.name;
  }

  getAge() {
    return this.age;
  }

  getCity() {
    return this.city;
  }

  getFullInfo() {
    return `სახელი: ${this.getName()}, ასაკი: ${this.getAge()}, ქალაქი: ${this.getCity()}`;
  }
}

const profile1 = new Profile("თამარი", 30, "გორი");
console.log("\n6) Profile სრული აღწერა:");
console.log(profile1.getFullInfo());

// 7
class DataTypesExample {
  constructor(score, description) {
    this.score = score; 
    this.description = description; 
  }

  get data() {
    return `ქულა: ${this.score}, აღწერა: ${this.description}`;
  }
}

const data1 = new DataTypesExample(95, "ძალიან კარგი შედეგი");
console.log("\n7) DataTypesExample მონაცემები:");
console.log(data1.data);

// 8
class Citizen {
  constructor(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
  }

  updateCity(newCity) {
    this.city = newCity;
  }

  getDetails() {
    return `სახელი: ${this.name}, ასაკი: ${this.age}, ქალაქი: ${this.city}`;
  }
}

const citizen1 = new Citizen("გიორგი", 40, "რუსთავი");
console.log("\n8) Citizen მონაცემები:");
console.log(citizen1.getDetails());

citizen1.updateCity("თბილისი");
console.log(citizen1.getDetails());
