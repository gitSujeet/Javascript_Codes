//Function to Capitalised first letter of name using Slicing and Lower the remaing letters using slicing.
var userName = prompt("What is your name?");
var firstChar = userName.slice(0,1);
var upperCase = firstChar.toUpperCase();
var restOfName = userName.slice(1,userName.length);
restOfName = restOfName.toLowerCase();
var capitalisedName = upperCase + restOfName;
alert("Hello, " + capitalisedName);