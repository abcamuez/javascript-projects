/*Exercise #1: Construct for loops that accomplish the following tasks:
    a. Print the numbers 0 - 20, one number per line.
    b. Print only the ODD values from 3 - 29, one number per line.
    c. Print the EVEN numbers 12 to -14 in descending order, one number per line.
    d. Challenge - Print the numbers 50 - 20 in descending order, but only if the numbers are multiples of 3. (Your code should work even if you replace 50 or 20 with other numbers). */

//     //A

//     for (let f = 0; f < 21;f++) {
//       console.log(f);
//     }

// //B
// for (let x = 3; x < 30; x+= 2) {
//   console.log(x)
// }

// //C
// // for (let y = 12; y >+ -15; y -= 2) {
// //   console.log(y)
// // }

//D

// for(let a = 50; a > 20; a--) {
//   if (a % 3 == 0){
//     console.log(a);
//   }
   
//   }

/*Exercise #2: 
Initialize two variables to hold the string “LaunchCode” and the array [1, 5, ‘LC101’, ‘blue’, 42].
*/

let str = 'LaunchCode';
let arrAy = [1, 5, 'LC101', 'blue', 42];

/*

Construct ``for`` loops to accomplish the following tasks:
  a. Print each element of the array to a new line.
  b. Print each character of the string - in reverse order - to a new line. */ 

//a
  for (let i = 0; i < arrAy.length; i++) {
console.log(arrAy[i])
}

//b

for (let j = str.length -1;j >= 0; j--) {
  console.log(str[j])
}




/*Exercise #3:Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays: */

  let newArr = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104];

  // a. One array contains the even numbers, and the other holds the odds.
let even = [];
let odd = [];

  // b. Print the arrays to confirm the results. 
for (let n = 0; n < newArr.length; n++){ 
  if (newArr[n] % 2 == 0)
even.push(newArr[n])
}
console.log(even);

for (let z = -10; z < newArr.length; z++){
  if (newArr[z] % 2 == 1)
  odd.push(newArr[z])
}
console.log(odd)