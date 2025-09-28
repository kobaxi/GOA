function loveCalculator() {
  let firstName = prompt("შეიყვანეთ პირველი სახელი:");
  let secondName = prompt("შეიყვანეთ მეორე სახელი:");

  if (!firstName || !secondName) {
    console.log("გთხოვთ, ორივე სახელი შეიყვანეთ.");
    return;
  }

  let lovePercentage = Math.floor(Math.random() * 101);
  console.log(firstName + " და " + secondName + ", თქვენი სიყვარულის პროცენტია " + lovePercentage + "%");
}

