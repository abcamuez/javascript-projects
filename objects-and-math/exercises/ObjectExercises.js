let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
  astronautID: 1,
  move: function() {return Math.floor(Math.random()*11);},
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
  astronautID: 2,
  move: function() {return Math.floor(Math.random()*11);},
};

//////////


let superChimpTwo = {
   name: 'Brad',
   species: 'Chimpanzee',
   mass: 11,
   age:6,
  astronautID: 3,
  move: function() {return Math.floor(Math.random()*11);},
}

let Beag = {
   name: 'Leroy',
   species: 'Beagle',
   mass: 14,
   age: 5,
  astronautID: 4,
  move: function() {return Math.floor(Math.random()*11);},
}

let tardiBear = {
   name: 'Almina',
   species: 'Tardigrade',
   mass: 0.0000000001,
   age: 1,
  astronautID: 5,
  move: function() {return Math.floor(Math.random()*11);},
}
// After you have created the other object literals, add the astronautID property to each one.
// superChimpOne.astronautID = 1;
// salamander.astronautID = 2;
// superChimpTwo.astronautID = 3;
// Beag.astronautID = 4;
// tardiBear.astronautID = 5;

// Create an array to hold the animal objects.
let crew = [superChimpOne, salamander, superChimpTwo, Beag, tardiBear];
// Print out the relevant information about each animal.
console.log(superChimpOne.name, superChimpOne.species);
console.log(salamander.name, salamander.species);
console.log(superChimpTwo.name, superChimpTwo.species);
console.log(Beag.name, Beag.species);
console.log(tardiBear.name, tardiBear.species);
// Start an animal race!
console.log(superChimpOne.move());
console.log(salamander.move());
console.log(superChimpTwo.move());
console.log(Beag.move());
console.log(tardiBear.move());


//////////////////////////////////////////////////////////////////////////////////////////
//Part 2

function crewReports(animal) {
   return `${animal.name} is a ${animal.species}. They are ${animal.age} years old and ${animal.mass} kilograms. Their ID is ${animal.astronautID}.`
 }
 console.log(crewReports(Beag));


 ////////////////////////
 //  Part 3

 function fitnessTest(arr){
   let results = [], numSteps, turns;
   for (let i = 0; i < arr.length; i++){
     numSteps = 0;
     turns = 0;
     while(numSteps < 20){
       numSteps += arr[i].move();
       turns++;
     }
     results.push(`${arr[i].name} took ${turns} turns to take 20 steps.`);
   }
   return results;
 }
 
 console.log(fitnessTest(crew));
