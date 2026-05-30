//1
class Car {
  constructor(name, turbo, age, color, engine) {
    this.name = name;
    this.turbo = turbo;
    this.age = age;
    this.color = color;
    this.engine = engine;
  }

  showInfo() {
    console.log(`მანქანა: ${this.name}, ტურბო: ${this.turbo}, ასაკი: ${this.age}, ფერი: ${this.color}, ძრავა: ${this.engine}`);
  }
}

const car1 = new Car("BMW", true, 3, "შავი", "V8");
const car2 = new Car("Audi", false, 5, "წითელი", "V6");

car1.showInfo();
car2.showInfo();

console.log('---------------------------');

//2
const carNames = ["BMW", "Audi", "Mercedes", "Toyota", "Honda"];

carNames.forEach((car, index) => {
  console.log(`მანქანის #${index + 1} სახელი: ${car}`);
});
