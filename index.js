// Prompt the user for their age
var ageInput = prompt("Enter your age:");
var age = parseInt(ageInput);

if (isNaN(age) || age < 0 || age > 90) {
    console.error("Please enter a valid age between 0 and 90.");
    alert("Please enter a valid age between 0 and 90.");
} else {
    lifeInWeeks(age);
}

function lifeInWeeks(age) {
    var totalDaysInYear = 365;
    var totalYears = 90;

    var totalDays = totalDaysInYear * totalYears;
    var daysLived = totalDaysInYear * age;
    var remainingDays = totalDays - daysLived;

    var totalWeeks = 52 * totalYears;
    var weeksLived = 52 * age;
    var remainingWeeks = totalWeeks - weeksLived;

    var totalMonths = 12 * totalYears;
    var monthsLived = 12 * age;
    var remainingMonths = totalMonths - monthsLived;

    console.log("You have " + remainingDays + " days, " + remainingWeeks + " weeks, and " + remainingMonths + " months left.");
    alert("You have " + remainingDays + " days, " + remainingWeeks + " weeks, and " + remainingMonths + " months left.");
}
