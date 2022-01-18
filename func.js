//Creating functions and using it inside a function.
function getMilk(money, costPerBottle){
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    console.log("You can buy "+ calcBottles(money, costPerBottle) + " bottles of Milk in " + "Rs." + money );
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
    return calcChange(money,costPerBottle); // Remainder of this dicivision
}
function calcBottles(startingMoney,costPerBottle){
    var numberOfBottles = Math.floor(startingMoney / costPerBottle);
    return numberOfBottles;
}

function calcChange(startingAmount, costPerBottle){
    var change = startingAmount % costPerBottle;
    return change;
}
console.log("Hello Master ,here is your "+ getMilk(10,3) + " change.");

