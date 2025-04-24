function checkWeather() {
    const code = parseInt(document.getElementById("weatherInput").value);
    let result = "";
  
    switch (code) {
      case 1:
        result = "მზიანი";
        break;
      case 2:
        result = "წვიმიანი";
        break;
      case 3:
        result = "მოღრუბლული";
        break;
      case 4:
        result = "ქარიანი";
        break;
      default:
        result = "არ არის დადგენილი";
    }
  
    document.getElementById("weatherResult").innerText = result;
  }
  