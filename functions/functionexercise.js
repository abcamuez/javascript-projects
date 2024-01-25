//Exercise
//Rectangles makeLine

function makeLine(size) {
    let line = '';
    for (let i = 0; i < size; i++) {
      line += '#';
    }
    return line;
  }

  console.log(makeLine(10) + '\n');

  //makeSquare

function makeSquare(size) {
    let lineSquare = '';
    for (let i = 0; i < size; i++) {
      lineSquare += '#####' + '\n';
    }
    return lineSquare;
  }

  console.log(makeSquare(2));

//   //makeRectangle(width, height) function

  function makeRectangle(width, height) {
    let rectangle = '';
    for (let i = 0; i < height; i++) {
      rectangle += (makeLine(width) + '\n');
    }
    return rectangle.slice(0, -1);
  }

  console.log(makeRectangle(5, 3));

  //makeDownwardStairs(height)

  function makeDownwardStairs(height) {
    let stairs = '';
  for (let i = 0; i < height; i++) {
    stairs += (makeLine(i+1) + '\n')
  }
  return stairs.slice(0, -1);
  }
  console.log(makeDownwardStairs(5))

//makeSpaceLine(numSpaces, numChars)


function makeSpaceLine(numSpaces, numChars) {
    let space = '';
    let line = '';
    for (let i = 0; i < numSpaces; i++){
      space += ' ';
    }
    for (let i = 0; i < numChars; i++){
      line += '#';
    }
  let spaceLine = (space + line + space);
  return spaceLine.slice(0, -1);
  }
  console.log(makeSpaceLine(3, 5));

// makeIsoscelesTriangle(height)
/*Consider the top line of the triangle to be level 0, the next to be line 1, and so on. Then line i is a space-line with height - i - 1 spaces and 2 * i + 1 hashes.
*/

function makeIsoscelesTriangle(height) {
    let triangle = '';
    for (let i = 0; i < height; i++) {
      triangle += (makeSpaceLine(height - i - 1, 2*i + 1) + '\n');
    }
    return triangle.slice(0, -1);
  }


console.log(makeIsoscelesTriangle(5))

//reverse


function makeDiamond(height) {
 let diamond = '';
 for (let i =0; i < height; i++) {
    diamond += makeSpaceLine(height - i - 1, 2 * i +1) + '\n';
 }
 for (let i = height - 2; i >= 0; i--) {
    diamond += makeSpaceLine(height - i - 1, 2 * i + 1) + '\n';
}
 return diamond.slice(0, -1);

}

console.log(makeDiamond(5));

