function runTasks() {
    // 1. მაქსიმალური რიცხვის პოვნა
    let num1 = parseInt(prompt("შეიყვანე პირველი რიცხვი:"));
    let num2 = parseInt(prompt("შეიყვანე მეორე რიცხვი:"));
    let max = (num1 > num2) ? num1 : num2;
    alert("მაქსიმალური რიცხვია: " + max);

    // 2. პაროლის სიგრძის შემოწმება
    let password = prompt("შეიყვანე პაროლი:");
    let message = (password.length >= 8) ? "პაროლი საკმარისად გრძელია" : "პაროლი ძალიან მოკლეა";
    alert(message);

    // 3. ფასდაკლების განსაზღვრა
    let quantity = parseInt(prompt("შეიყვანე შეძენილი საქონლის რაოდენობა:"));
    let discount = (quantity >= 10) ? 10 : 0;
    alert("თქვენი ფასდაკლებაა: " + discount + "%");
}
