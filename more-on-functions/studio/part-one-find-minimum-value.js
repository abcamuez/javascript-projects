//1) Create a function with an array of numbers as its parameter. The function should iterate through the array and return the minimum value from the array. Hint: Use what you know about if statements to identify and store the smallest value within the array.
// function findMinimumVal(numbers){
//     let newArray = [];
//     for(let i = 0; i < numbers.length; i++){
//         let smallest = findMinimumVal(numbers);
//         newArray.push(smallest)
//         numbers.splice(numbers.indexOf(smallest),1)
//     }
//         return newArray
// }

function findMinimumVal(numbers){
    let min = numbers[0];
    for(let i = 1; i < numbers.length; i++){
        if(numbers[i] < min){
            min = numbers[i];
        }
    }
    return min;
}


//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

//Using one of the test arrays as the argument, call your function inside the console.log statement below.

console.log(nums2);


// function recursiveSort(numbers, newArray =[]){
//     if (numbers.length ==1){
//       newArray.push(numbers[0])
//     } else {
//       let smallest = findMinimumVal(numbers)
//       newArray.push(smallest);
//       numbers.splice(numbers.indexOf(smallest),1);
//       recursiveSort(numbers, newArray)
//     }
//     return newArray
//   }

//   console.log(recursiveSort(nums3));

function recursiveSort(numbers, newArray =[]){
    if (numbers.length === 0){
      return newArray;
    }
    let smallest = findMinimumVal(numbers);
    newArray.push(smallest);
    numbers.splice(numbers.indexOf(smallest),1);
    return recursiveSort(numbers, newArray);
}

console.log(recursiveSort(nums3));
