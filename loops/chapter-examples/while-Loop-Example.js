// let i = 0;

// while (i < 51) {
//   console.log(i);
//   i++;
// }

// const input = require('readline-sync');

// let num = input.question('Please enter a positive number:');
// num = Number(num);

// while (num <= 0) {
//    num = input.question('Invalid input. Please enter a positive number:');
//    num = Number(num);
// }

// let i = 0;

// while (i < 51) {
//    console.log(i);
//    i--;
// }

//Check Your Understanding
 //True: You can rewrite any for loop as a while loop.

 let n = 10;
let answer = 2;

while (n > 0) {
   answer = answer + n;
   n = n + 8;
}

console.log(answer);

// //The following code contains an infinite loop. Which is the best explanation for why the loop does not terminate?
//In the while loop body, we must set n to false, and this code does not do that.


// for (let i = 0; i < 42; i++) {
   
//   // rest of loop body

//   if (i > 10) {
//      break;
//   }

// }

// let numbers = [ /* some numbers */ ];
// let searchVal = 42;
// let i = 0;

// while (i < numbers.length) {
//    if (numbers[i] === searchVal) {
//       break;
//    }
//    i++;
// }

// if (i < numbers.length) {
//    console.log("The value", searchVal, "was located at index", i);
// } else {
//    console.log("The value", searchVal, "is not in the array.");
// }


for (let i = 0; i < 100; i++){
  console.log("Repetition is a good thing.");
}
