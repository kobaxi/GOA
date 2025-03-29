function checkEvenOdd() {
    var number = document.getElementById("number").value;
    if (number % 2 === 0) {
        document.getElementById("result").innerText = "რიცხვი არის ლუწი";
    } else {
        document.getElementById("result").innerText = "რიცხვი არის კენტი";
    }
}
