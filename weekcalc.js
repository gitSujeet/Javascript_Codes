//Function for checking no. of days, week, and month left for a person in a life span of 90 years.
function lifeInWeeks(age){
    var daysLeft = (32850) - (age * 365);
    var weekLeft = (4680) - (age * 52);
    var monthsLeft = (1080) - (age*12);
    alert("You have " + daysLeft +" days, " + weekLeft + " weeks, and " + monthsLeft + " months left.")
}

lifeInWeeks(56);

