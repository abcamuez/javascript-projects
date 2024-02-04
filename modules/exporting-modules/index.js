// const palindromeCheck = require('./practiceExports.js');

// console.log(typeof palindromeCheck);
// console.log(palindromeCheck('that'));
// console.log(palindromeCheck('radar'));
// // console.log()

// const practice = require('./practiceExports.js');

// console.log(typeof practice);
// console.log(practice);

const practice = require('./practiceExports.js');
let arr = ['Hello', 'World', 123, 987, 'LC101'];

console.log(practice.isPalindrome('mom'));
console.log(practice.evenOrOdd(9));

for (i=0; i < 3; i++){
    console.log(practice.randomArrayElement(arr));
}

//A module in Node.js is:A file that contains documentation about functions in JavaScript.
//circleStuff(circumference(argument))