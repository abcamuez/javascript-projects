// Use terminal commands to see what happens when we call Astronaut but do not pass in 3 arguments.

// Next, set default values for 1 or more of the parameters in constructor.

// class Astronaut {
//    constructor(name, age, mass = 54){
//      this.name = name;
//      this.age = age;
//      this.mass = mass;
//    }
// }

// let tortoise = new Astronaut('Speedy', 120);

// console.log(tortoise.name, tortoise.age, tortoise.mass);

// What happens if we call Astronaut and pass in MORE than 3 arguments? TRY IT!

//If we call the class with let myCar = new Car('Chevy', 'Astro', 1985, 'gray', 20), what is output by console.log(typeof myCar.year)?
//Answer: number

class Car {
  constructor(make, model, year, color, mpg){
     this.make = make;
     this.model = model;
     this.year = year;
     this.color = color;
     this.mpg = mpg;
  }
}

let myCar = new Car('Chevy', 'Astro', 1985, 'gray', 20);
console.log(typeof myCar.year);

// let myCar = new Car('Tesla', 'Model S', 2019);
// console.log(myCar);
//If we call the class with let myCar = new Car('Tesla', 'Model S', 2019), what is output by console.log(myCar)
//Car {make: ‘Tesla’, model: ‘Model S’, year: 2019, color: undefined, mpg: undefined }