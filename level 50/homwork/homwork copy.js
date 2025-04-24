function checkDay() {
    const dayNumber = parseInt(document.getElementById("dayInput").value);
    let result = "";
  
    switch (dayNumber) {
      case 1:
        result = "ორშაბათი";
        break;
      case 2:
        result = "სამშაბათი";
        break;
      case 3:
        result = "ოთხშაბათი";
        break;
      case 4:
        result = "ხუთშაბათი";
        break;
      case 5:
        result = "პარასკევი";
        break;
      case 6:
        result = "შაბათი";
        break;
      case 7:
        result = "კვირა";
        break;
      default:
        result = "არასწორი დღე";
    }
  
    document.getElementById("dayResult").innerText = result;
  }
  