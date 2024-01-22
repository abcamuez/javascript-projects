// let str = "HELL YEAH";
// let reversed = "";

// for (let i = 0; i < str.length; i++) {
//     reversed = str[i] + reversed;
// }

// console.log(reversed);
//Answer: When you use reversed = reversed + str[i]; it does not reverse the words, its displayed as normal

let numbers = [2, -5, 13, 42];
let total = '';

for (let i = 0; i < numbers.length; i++) {
   total += numbers[i];
}