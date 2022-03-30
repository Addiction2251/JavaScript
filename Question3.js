var num = 84697; // Number to be reversed
var c = num; // Variable to store the value of the original number
var rev = 0; // Variable to store the reversed number.

function reverse(num) { //Function to reverse the given Number.
    while (num > 0) {
        var d = num % 10;
        rev = (rev * 10) + d;
        num = parseInt(num / 10);
    }
}
reverse(num); //Calling the Function
console.log("Original Number :- ", c); //Displaying the original number.
console.log("Reversed Number :- ", rev); //Displaying the Reversed number.