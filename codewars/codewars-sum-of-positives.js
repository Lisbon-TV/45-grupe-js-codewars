console.clear();

function positiveSum(arr) {
  let sum = 0; // lift variable of sum = 0
  for (let i = 0; i < arr.length; i++) { // use for as it array, standard use
    if (arr[i] >= 0) // use if when values are greater than 0
    sum += arr[i]; // add all the sume of that, 
  }
  return sum;   // return all sums with postive numbers! 
}





console.log(positiveSum([1,2,3,4,5]),15);
console.log(positiveSum([1,-2,3,4,5]),13);
console.log(positiveSum([]),0);
console.log(positiveSum([-1,-2,-3,-4,-5]),0);
console.log(positiveSum([-1,2,3,4,-5]),9);