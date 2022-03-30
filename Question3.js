var num = 84697;
var c = num;
var rev = 0;

function reverse(num) {
    while (num > 0) {
        var d = num % 10;
        rev = (rev * 10) + d;
        num = parseInt(num / 10);
    }
}
reverse(num);
console.log("Original Number :- ", c);
console.log("Reversed Number :- ", rev);