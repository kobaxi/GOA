function checkTime() {
    const hour = parseInt(document.getElementById("hourInput").value);
    
    if (hour >= 0 && hour <= 11) {
      document.getElementById("result").innerText = "am";
    } else if (hour >= 12 && hour <= 23) {
      document.getElementById("result").innerText = "pm";
    } else {
      document.getElementById("result").innerText = "არასწორი შეყვანა";
    }
  }
  