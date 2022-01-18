//Code for Characters limit, Character Use and Character left to use.
var tweet = prompt("Enter you Tweet in 180 words:").slice(0,280);
alert("You have enter "+ tweet.length + " characters, " + "and remaing characters left are: -" + (280- tweet.length))
