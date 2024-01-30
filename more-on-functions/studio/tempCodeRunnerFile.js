function recursiveSort(numbers, newArray =[]){
    if (numbers.length ==1){
      newArray.push(numbers[0])
    } else {
      let smallest = findMinimumVal(numbers)
      newArray.push(smallest);
      numbers.splice(numbers.indexOf(smallest),1);
      recursiveSort(numbers, newArray)
    }
  }