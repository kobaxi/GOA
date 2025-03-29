function checkGrade() {
    var score = document.getElementById("score").value;
    var grade;
    if (score >= 90) {
        grade = "A";
    } else if (score >= 80) {
        grade = "B";
    } else if (score >= 70) {
        grade = "C";
    } else if (score >= 60) {
        grade = "D";
    } else {
        grade = "F";
    }
    document.getElementById("result").innerText = "შეფასება: " + grade;
}
