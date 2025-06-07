let book = {
  title: "ვეფხისტყაოსანი",
  author: "შოთა რუსთაველი",
  year: 1200,
  genre: "პოეზია",
  price: 29.99
};

console.log("წიგნის ობიექტი:", book);
console.log("სათაური:", book.title);
console.log("ავტორი:", book.author);
console.log("გამოშვების წელი:", book.year);
console.log("ჟანრი:", book.genre);
console.log("ფასი:", book.price);
console.log("სათაური:", book["title"]);
console.log("ავტორი:", book["author"]);
console.log("გამოშვების წელი:", book["year"]);
console.log("ჟანრი:", book["genre"]);
console.log("ფასი:", book["price"]);
let bookSentence = `წიგნის სახელწოდებაა "${book.title}", ავტორია ${book.author}, გამოიცა ${book.year} წელს, ჟანრია ${book.genre} და მისი ფასი არის ${book.price} ლარი.`;
console.log(bookSentence);
let student = {
  name: "ნინო ბერიძე",
  age: 20,
  faculty: "ინფორმატიკა",
  course: 2,
  gpa: 3.85
};
console.log(" სტუდენტის ობიექტი:", student);
console.log("სახელი:", student.name);
console.log("ასაკი:", student.age);
console.log("ფაკულტეტი:", student.faculty);
console.log("კურსი:", student.course);
console.log("საშუალო ქულა:", student.gpa);


console.log("სახელი:", student["name"]);
console.log("ასაკი:", student["age"]);
console.log("ფაკულტეტი:", student["faculty"]);
console.log("კურსი:", student["course"]);
console.log("საშუალო ქულა:", student["gpa"]);

let studentSentence = `სტუდენტის სახელია ${student.name}, ის არის ${student.age} წლის, სწავლობს ${student.faculty}-ის ფაკულტეტზე, ${student.course} კურსზე და მისი საშუალო ქულაა ${student.gpa}.`;
console.log(studentSentence);
