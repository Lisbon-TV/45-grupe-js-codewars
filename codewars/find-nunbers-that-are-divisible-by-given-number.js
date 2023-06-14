console.clear();
let numbers = [1, 2, 3, 4, 5, 6];
let divisor = 2;

function divisibleBy(numbers, divisor){
    return numbers.filter((number) => number % divisor === 0)
}

console.log(divisibleBy([1,2,3,4,5,6], 2), [2,4,6]);
console.log(divisibleBy([1,2,3,4,5,6], 3), [3,6]);
console.log(divisibleBy([0,1,2,3,4,5,6], 4), [0,4]);
console.log(divisibleBy([0], 4), [0]);
console.log(divisibleBy([1,3,5], 2), []);


// // same:

// function divisibleBy(numbers, divisor) {
//     return numbers.filter(n => n % divisor === 0)
//   }

// //

// function divisibleBy(numbers, divisor) {
// 	var newArr = [];
// 	for (let i = 0; i < numbers.length; i++) {
// 		if (numbers[i] % divisor === 0) {
// 			newArr.push(numbers[i]);
// 		} 
// 	}
// return newArr;
// }

// //

// const divisibleBy = (numbers, divisor) => numbers.filter(number => !(number % divisor));

// //

// function divisibleBy(numbers, divisor){
//     return numbers.filter(function(number){
//       return number % divisor === 0;
//     })
//   }

//   //

//   const divisibleBy = (numbers, divisor) =>
//   numbers.filter(val => !(val % divisor));

//   //

//   function divisibleBy(numbers, divisor) {
//     return numbers.filter(x => x % divisor == 0);
//   }

//   //

//   function divisibleBy(numbers, divisor){
//     let answer = []
//      numbers.map(x => {
//      if(x % divisor === 0){
//        answer.push(x)}
//      } )
//      return answer
//     }

//     //

//     divisibleBy = (n, d) => n.filter(v => v%d==0)