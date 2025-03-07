//Try adding new properties inside constructor.
class Astronaut {
   constructor(name, age, mass){
     this.name = name;
     this.age = age;
     this.mass = mass;
   }
}

let fox = new Astronaut('Fox', 7, 12);
let hippo = new Astronaut('Hippo', 25, 1500);

// console.log(typeof hippo, typeof fox);
// console.log(hippo, fox)

//Book example:
// console.log(fox);
// console.log(fox.age, fox.color);

// fox.age = 9;
// fox.color = 'red';

// console.log(fox);
// console.log(fox.age, fox.color);

//try
console.log(hippo.age, hippo.mass);
console.log(hippo);

//Try modifying or adding properties below.