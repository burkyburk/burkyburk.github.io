
var play = "yes";
while (play === "yes" || play === "y" || play === "Yes" || play === "YES")    {



var num1 = Math.ceil(Math.random() * 3);
var num2 = Math.ceil(Math.random() * 3);
var num3 = Math.ceil(Math.random() * 3);

alert(num1 +"\n"  + num2 + " \n" + num3);

if (num1 === num2 && num1 === num3) {
	console.log("You win! Three of a kind!");
}
else if (num1 === 1 && num2 === 2 && num3 === 3){
	console.log("You win! 1-2-3!")
}
else if (num1 === 3 && num2 === 2 && num3 === 1){
	console.log("You win! 3-2-1!")
}
else {
	console.log("You lose!");
}

play = window.prompt('Play Again? Type yes or no.');

}







