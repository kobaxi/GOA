//1
function guessPassword() {
  let password = "Group 41 is best";
  let attempts = 3;

  for (let i = 0; i < attempts; i++) {
    let userInput = prompt("შეიყვანე პაროლი:");
    if (userInput === password) {
      alert("თქვენი შეყვანილი პაროლი სწორია");
      return;
    }
  }

  alert("თქვენ ამოგეწურათ ცდების რაოდენობა");
}

//2
function calculateFactorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  console.log(n + " ფაქტორიალია:", result);
}

//3
function countdown() {
  for (let i = 100; i >= 0; i--) {
    console.log("დარჩენილია " + i + " წამი");
  }
}

//4
function skip7and13() {
  for (let i = 1; i <= 20; i++) {
    if (i === 7 || i === 13) continue;
    console.log(i);
  }
}

//5
function stopAtDivisibleBy8() {
  for (let i = 1; i <= 30; i++) {
    if (i % 2 !== 0) continue; 
    if (i % 8 === 0) {
      console.log(i);
      break;
    }
    console.log(i);
  }
}

//6
function skipMultiplesOf5() {
  for (let i = 1; i <= 30; i++) {
    if (i % 5 === 0) continue;
    console.log(i);
  }
}