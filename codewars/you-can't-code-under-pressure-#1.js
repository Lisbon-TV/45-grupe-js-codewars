console.clear();

/*
Description:
Code as fast as you can! You need to double the integer and return it.
*/

function doubleInteger(int) {
    // i will be an integer. Double it and return it.
    return int * 2;
  }

console.log(doubleInteger(2), 4);  


// Other Solutions: 


const doubleInteger = i => 2 * i;

function doubleInteger(i) {
    // i will be an integer. Double it and return it.
    return i+i;
  }


  unction doubleInteger(i) {
    return i << 1;
  }
  
function doubleInteger(i) {
    // i will be an integer. Double it and return it.
    return parseInt(i) * 2;
}  

function doubleInteger(i) {
    if (i === 0) {
    return 0;
    } else {
      return i *= 2;
     }
      return i;
    }