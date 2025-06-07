const book = {
  title: "ვეფხისტყაოსანი",
  author: "შოთა რუსთაველი",
  year: 1200,
  genre: "პოეზია",
  price: 25.50
};

console.log(" წიგნის ობიექტი:", book);

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

console.log(`წიგნი "${book.title}", რომლის ავტორია ${book.author}, გამოქვეყნდა ${book.year} წელს. ის არის ჟანრის – ${book.genre}, და ღირს ${book.price} ლარი.`);
