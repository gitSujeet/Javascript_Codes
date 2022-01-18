//Creating a BMI(Body Mass Index) Index by creating a function and getting input from User.
var weight = prompt("Enter your Weight in KG");
var height = prompt("Enter your Height in Metre");

function bmiCalculator(weight,height){
    var bmi = Math.round(weight/(Math.pow(height, 2)));
    return bmi;
}
var bmi = bmiCalculator(weight,height)
alert ("bmi should be equal around " + bmi+ " in this case");