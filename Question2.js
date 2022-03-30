var arr = [1, 3, 5, 8, 7, 9, 6, 4, 10, 99, 0]; //Array Elements.
var min = arr[0]; //Variable to store the smallest ELement
var max = arr[0]; // Variable to store the largest Element

function minMax(arr) { //Function to calculate the smallest and the largest element.
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        } else if (arr[i] > max) {
            max = arr[i];
        }
    }
}

minMax(arr); //Calling the Function.

console.log("Min :- ", min, "Max :- ", max); //Displaying the Result.