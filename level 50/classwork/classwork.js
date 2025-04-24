function serveCoffee() {
    const coffeeType = document.getElementById('coffeeNumber').value;
    let result;

    switch (parseInt(coffeeType)) {
        case 1:
            result = "Americano";
            break;
        case 2:
            result = "Espresso";
            break;
        case 3:
            result = "Cappuccino";
            break;
        default:
            result = "Unknown";
    }

    document.getElementById('result').textContent = result;
}
