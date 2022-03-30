var odd = 0; // For storing the count of odd numbers.
var even = 0; //For storing the count of even numbers.
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


function evenOdd(arr) { //Function to count the number of odd and even elements in the array
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            even++;
        } else {
            odd++;
        }

    }

}
evenOdd(arr); // Function Call.
console.log("Even :- ", even, "Odd:-", odd); //Displaying  the output.