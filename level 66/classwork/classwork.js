function getDayOfWeek(year, month, day) {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let date = new Date(year, month - 1, day);
    
    let dayIndex = date.getDay();

    return days[dayIndex];
}
console.log(getDayOfWeek(1993, 7, 12));
