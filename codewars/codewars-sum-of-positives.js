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


Solutions: 

same: 

function positiveSum(arr) {
    var total = 0;    
    for (i = 0; i < arr.length; i++) {    // setup loop to go through array of given length
      if (arr[i] > 0) {                   // if arr[i] is greater than zero
        total += arr[i];                  // add arr[i] to total
      }
    }
    return total;                         // return total
  }

  function positiveSum(arr) {
    return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
 }

 function positiveSum (arr) {
    return arr.filter(x => x>=0).reduce((a, c) => a + c, 0);
  }

  const positiveSum = (arr) => arr.reduce((sum, n) => n > 0 ? sum + n : sum, 0);


  function positiveSum(arr) {
    return arr.filter(x => x > 0).reduce((a, b) => a+b, 0);
  }

  function positiveSum( obj ) {
    return obj.map(el => el < 0 ? 0 : el).reduce((acc, i)=> acc + i, 0)
  }


  function positiveSum(arr) {
    var sum = 0;
    arr.forEach(function(v,i,a) {
      if(v>0){sum+=v;}
    });
    return sum;
  }

  function positiveSum(arr) {
    return arr.reduce((s,v) => v > 0 ? s + v : s, 0);
  }

  const positiveSum = arr => arr.reduce((acc, cur) => cur > 0 ? acc + cur : acc, 0)


  function positiveSum(arr) {
    let sum = 0;
    
    for (n of arr) {
      if (n > 0) sum += n;
    }
    
    return sum;
  }

  function positiveSum(arr) {
    return arr.filter(num => num >= 0).reduce((prev, curr) => prev + curr, 0);
  }


  function positiveSum(arr) {
    let sum = 0
    
    for (let num of arr) {
      if (num > 0) sum += num
    }
  
    return sum
  }