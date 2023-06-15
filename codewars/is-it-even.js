console.clear();

function testEven(n) {
    return n % 2 == 0;
}


console.log(testEven(0), true, "testEven for 0");
console.log(testEven(0.5), false, "testEven for 0.5");
console.log(testEven(1), false, "testEven for 1");
console.log(testEven(2), true, "testEven for 2");
console.log(testEven(-4), true, "testEven for 2");


// // Solutuions:


// function testEven(n) {
//     return n % 2 === 0 ? true : false;
//   }

//   function testEven(n){
//     return !(n % 2);
//   }

//   const testEven = n => !(n % 2);


//   function testEven(n) {
//     return (n % 2) == 0;
// }


// // Determine if the number passed is even (or not).
// // The function needs to return either a true or false.
// // Numbers may be positive or negative, integers or floats.
// // Floats are considered UNeven for this kata.

// function testEven(n) {
//     return n % 2 === 0;
//   }
  
  
//   function testEven2(n) {
//     return !(n % 2);
//   }
//   // The "!" exclamation point is part of JavaScript's logical operators.
//   // It is called the "unary negation operator", or more simply "logical NOT".
//   // Tt tries to convert whatever follows it into a boolean value ( true / false ).


//   function testEven(n) {
//     if ( n % 2 === 0 ){
//       return true;
//     }
//     else return false;
//  }

// function testEven(n) {
//     //*** THIS IS BEST PRACTICE
//     const [integerPart, decimalPart] = n.toString().split(".");
//     if (integerPart === "") {
//       return false;
//     }
//     if (decimalPart === undefined) {
//       return parseInt(integerPart) % 2 === 0;
//     } else if (decimalPart === "" || decimalPart === "0") {
//       return parseInt(integerPart) % 2 === 0;
//     } else {
//       return false;
//     }
//   }


//   function testEven(n) {
//     if (n % 2 !== 0){
//      return false 
//     } else if (Math.floor(n) !== n){
//      return false
//     } else {
//      return true
//     }
// }


// testEven = n => n % 2 == 0 ? true : false

// const testEven = n => { return !(n%2); }

// const testEven = n => n % 2 === 0 ? true : false;