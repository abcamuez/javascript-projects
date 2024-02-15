// Here we assign the method inside the constructor
class AstronautI {
   constructor(name, age, mass){
     this.name = name;
     this.age = age;
     this.mass = mass;
     this.reportStats = function() {
       let stats = `${this.name} is ${this.age} years old and has a mass of ${this.mass} kg.`;
         return stats;
     }
   }
 }
 
 // Here we assign the method outside of the constructor
 class AstronautO {
   constructor(name, age, mass){
     this.name = name;
     this.age = age;
     this.mass = mass;
   }
 
   reportStats() {
     let stats = `${this.name} is ${this.age} years old and has a mass of ${this.mass} kg.`;
     return stats;
   }
 }
 
 let fox = new AstronautI('Fox', 7, 12);
 let hippo = new AstronautO('Hippo', 25, 1000);
 
 console.log(fox); //Inside the function did not work properly for the reportstats
 //the declaration of a method outside of the constructor will not consume as much memory.
 console.log(hippo);

 // Check Your Understanding
 //What is the assignment for the grow method missing? () <-- parentheses 
 class Plant {
  constructor(type, height) {
     this.type = type;
     this.height = height;
  }

  grow()  {
     this.height = this.height + 1;
  }
}

let snakePlant = new Plant('succulent', 12);
console.log(snakePlant);