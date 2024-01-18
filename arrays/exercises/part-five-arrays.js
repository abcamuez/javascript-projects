let str = 'In space, no one can hear you code.';
let arr = ['B', 'n', 'n', 5];

//1) Use the split method on the string to identify the purpose of the parameter inside the (). 
//Answer: the parameter is needed because it splits a string using a specific separator
console.log(str.split());
console.log(str.split('e'));
console.log(str.split(' '));
console.log(str.split(''));
//2) Use the join method on the array to identify the purpose of the parameter inside the ().
//Answer: the parameter adds the elements to the array
let purpose2 = arr.join('a');
console.log(purpose2);

//3) Do split or join change the original string/array?
//Answer Yes it does change th original array but in different ways

//4) We can take a comma-separated string and convert it into a modifiable array. Try it! Alphabetize the cargoHold string, and then combine the contents into a new string.
let cargoHold = "water,space suits,food,plasma sword,batteries";
console.log(cargoHold.split(',').sort().join(','));
