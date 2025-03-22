function generateSentence() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var age = document.getElementById("age").value;
    var residence = document.getElementById("residence").value;
    var motherFirstName = document.getElementById("motherFirstName").value;
    var motherLastName = document.getElementById("motherLastName").value;
    var motherAge = document.getElementById("motherAge").value;

    if (firstName === "" || lastName === "" || age === "" || residence === "" || 
        motherFirstName === "" || motherLastName === "" || motherAge === "") {
        alert("გთხოვთ, შეიყვანოთ ყველა საჭირო მონაცემი!");
        return;
    }

    var sentence = `გამარჯობა, ჩემი სახელი არის ${firstName} ${lastName}, მე ვარ ${age} წლის და ვცხოვრობ ${residence}. ` +
        `ჩემი დედის სახელი არის ${motherFirstName} ${motherLastName}, და ის არის ${motherAge} წლის.`;

    document.getElementById("output").innerText = sentence;
}
