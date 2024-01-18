//Part Three section one

let language = 'JavaScript';

//1. Use string concatenation and two slice() methods to print 'JS' from 'JavaScript'
ans = language.slice(0,1) + language.slice(4,5);
console.log(ans)
//2. Without using slice(), use method chaining to accomplish the same thing.
let result = language.replace("JavaScript","JS");
console.log(result)

//3. Use bracket notation and a template literal to print, "The abbreviation for 'JavaScript' is 'JS'."

let initials = "JS";
console.log(`The Abbreviation for '${language}' is '${initials}.'`);

//4. Just for fun, try chaining 3 or more methods together, and then print the result.
let fruit = "Banana, Apples, Pears"
console.log(`The best fruits are ${fruit} but especially ${fruit.slice(0,6)}`);
//Part Three section Two

//1. Use the string methods you know to print 'Title Case' from the string 'title case'.

let notTitleCase = 'title case';
let answer = notTitleCase.replace('t','T').replace('c','C');
console.log(answer)
