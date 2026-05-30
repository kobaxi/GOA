function updateCurrentDateTime() {
  const now = new Date();
  const formatted = now.toISOString().replace('T', ' ').slice(0, 19);
  document.getElementById('currentDateTime').textContent = formatted;
}
setInterval(updateCurrentDateTime, 1000);
updateCurrentDateTime();

function calculateAge() {
  const birthDate = new Date(document.getElementById("birthdateInput").value);
  const today = new Date();

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (days < 0) {
    months--;
    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }
  if (months < 0) {
    years--;
    months += 12;
  }

  document.getElementById("ageResult").textContent = `You are ${years} years, ${months} months, and ${days} days old.`;
}

function showDayOfWeek() {
  const inputDate = new Date(document.getElementById("dayInput").value);
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const dayName = days[inputDate.getDay()];
  document.getElementById("dayOutput").textContent = `That day was a ${dayName}`;
}

let timerValue = 0;
setInterval(() => {
  document.getElementById("timer").textContent = timerValue++;
}, 1000);

function updateCurrentTime() {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  document.getElementById("currentTime").textContent = timeString;
}
setInterval(updateCurrentTime, 1000);
updateCurrentTime();

setInterval(() => {
  console.log("Random:", Math.random());
}, 1000);

function showDelayedMessage() {
  const message = document.getElementById("userMessage").value;
  const delay = parseInt(document.getElementById("delay").value);
  setTimeout(() => {
    document.getElementById("delayedOutput").textContent = message;
  }, delay);
}

setTimeout(() => {
  console.log("Hello! This is a delayed greeting.");
}, 2000);

function msg1() {
  console.log("Message 1: Starting process...");
}
function msg2() {
  console.log("Message 2: Halfway there...");
}
function msg3() {
  console.log("Message 3: Finished!");
}
setTimeout(msg1, 1000);
setTimeout(msg2, 2000);
setTimeout(msg3, 3000);

function updateGreeting() {
  const now = new Date();
  const hour = now.getHours();
  let greeting = "";

  if (hour < 12) {
    greeting = "Good Morning!";
  } else if (hour < 18) {
    greeting = "Good Afternoon!";
  } else {
    greeting = "Good Evening!";
  }

  document.getElementById("greetingMessage").textContent = greeting;
}
setInterval(updateGreeting, 1000);
updateGreeting();
