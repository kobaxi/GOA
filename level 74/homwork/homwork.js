//1
function Car(name, turbo, age, color, engine) {
  this.name = name;
  this.turbo = turbo;
  this.age = age;
  this.color = color;
  this.engine = engine;
}

const car1 = new Car("BMW", true, 3, "Red", "V8");
console.log("დავალება 1:", car1);

//2
const cars = [
  new Car("BMW", true, 3, "Red", "V8"),
  new Car("Audi", false, 5, "Black", "V6"),
  new Car("Mercedes", true, 2, "White", "V8"),
  new Car("Tesla", false, 1, "Blue", "Electric"),
  new Car("Toyota", true, 10, "Green", "V4"),
];

console.log("დავალება 2:", cars);

//3
console.log("დავალება 3:");
cars.forEach(car => {
  console.log(`Name: ${car.name}, Color: ${car.color}`);
});

//4
const turboCars = cars.filter(car => car.turbo);
console.log("დავალება 4:", turboCars);

//5
const nameAndEngine = cars.map(car => ({
  name: car.name,
  engine: car.engine
}));
console.log("დავალება 5:", nameAndEngine);
