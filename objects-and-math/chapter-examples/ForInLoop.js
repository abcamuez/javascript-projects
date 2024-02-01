// let tortoiseOne = {
//    species: "Galapagos Tortoise",
//    name: "Pete",
//    weight: 919,
//    age: 85,
//    diet: ["pumpkins", "lettuce", "cabbage"]
// };
//    for(item in tortoiseOne){
//       console.log(item + ', ' + tortoiseOne[item])
   // }
// Using a for..in loop, iterate through each property in the tortoiseOne object and print the value to the console.



//Check Your Understanding
//Which of the following is NOT a true statement about objects?
//Keys are stored as numbers

//Which keyword can be used to refer to an object within an object?
//this
////////////

//We want to add a method after the diet property for easily increasing Cynthia’s age on her birthday. Which of the following is missing from our method? You can select MORE than one.
//a comma
////this

let giraffe = {
   species: "Reticulated Giraffe",
   name: "Cynthia",
   weight: 1500,
   age: 15,
   diet: "leaves",//a comma
   birthday: function () {this.age = age + 1;}//this
 };

 console.log(giraffe.age);
 console.log(giraffe['age']);


 //What type of loop is designed for iterating through the properties in an object?
// for in loop

// let tortoiseOne = {
//    age: 150,
//    species: "Galapagos Tortoise",
//    diet: ["pumpkins", "lettuce", "cabbage"]
// };

// let tortoiseTwo = {
//    age: 150,
//    species: "Galapagos Tortoise",
//    diet: ["pumpkins", "lettuce", "cabbage"]
// };

//console.log(tortoiseOne.age === tortoiseTwo.age)

//Given the following object definitions, which statement returns true?
//tortoiseOne.age === tortoiseTwo.age




// console.log(Math.PI);
// console.log(Math.PI*4);
// console.log(Math.PI + Math.PI);
//////////////////////////////////////////////////////////

//Which of the following returns -3 when applied to -3.87?


// console.log(Math.floor(-3.87));
// console.log(Math.random(-3.87));
console.log(Math.trunc(-3.87));
// //trunc gave a 3
// console.log(Math.round(-3.87));


/////////////////////////
//What is printed by the following program?

// let num = Math.floor(Math.random()*10);

// console.log(num);

//A random number between 0 and 9.


let num = Math.round(Math.random()*10);

console.log(num);

//A random number between 0 and 9.
