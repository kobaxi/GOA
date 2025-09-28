const button = document.createElement("button");
button.textContent = "დააჭირე ჩემზე";
button.style.backgroundColor = "#27ae60";
button.style.color = "#fff";
button.style.fontSize = "18px";
button.style.padding = "10px 20px";
button.style.border = "none";
button.style.borderRadius = "6px";
button.style.cursor = "pointer";
document.body.appendChild(button);
setTimeout(() => {
  button.remove();
  console.log("ღილაკი წაიშალა");
}, 5000);