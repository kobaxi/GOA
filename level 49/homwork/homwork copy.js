function checkTemperature() {
    var temperature = document.getElementById("temperature").value;
    if (temperature <= 0) {
        document.getElementById("result").innerText = "ტემპერატურა არის ცივი";
    } else if (temperature <= 25) {
        document.getElementById("result").innerText = "ტემპერატურა არის ზომიერი";
    } else {
        document.getElementById("result").innerText = "ტემპერატურა არის ცხელი";
    }
}
