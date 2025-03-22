function calculateRemainingApples() {
    var totalApples = document.getElementById("totalApples").value;
    var givenApples = document.getElementById("givenApples").value;

    if (totalApples === "" || givenApples === "") {
        alert("Please enter both values.");
        return;
    }

    var remainingApples = totalApples - givenApples;
    document.getElementById("appleOutput").innerText = "You have " + remainingApples + " apples remaining.";
}

function calculateTotalSavings() {
    var initialSavings = document.getElementById("initialSavings").value;
    var deposit = document.getElementById("deposit").value;

    if (initialSavings === "" || deposit === "") {
        alert("Please enter both values.");
        return;
    }

    var totalSavings = parseFloat(initialSavings) + parseFloat(deposit);
    document.getElementById("depositOutput").innerText = "Your total savings is " + totalSavings + " units.";
}


function calculateRemainingCoins() {
    var totalCoins = document.getElementById("totalCoins").value;
    var spentCoins = document.getElementById("spentCoins").value;

    if (totalCoins === "" || spentCoins === "") {
        alert("Please enter both values.");
        return;
    }

    var remainingCoins = totalCoins - spentCoins;
    document.getElementById("coinsOutput").innerText = "You have " + remainingCoins + " coins remaining.";
}
