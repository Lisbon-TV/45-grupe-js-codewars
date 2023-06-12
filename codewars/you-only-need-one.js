console.clear();

// sitas geresnis, nes identiskas sekanciam kodui, bet trumpesnis! 
function check(stack, needle) {
    for(let i=0; i < stack.length; i++){
       if(stack[i] === needle) {
        //console.log('Found!!');
        return true;
       }
    }
    return false;
  }

//   function check2(stack, needle) {
//     let exist = false;
//     for(let i=0; i < stack.length; i++){
//        if(stack[i] === needle) {
//         return true;
//         break; // sustabdo cikla! 
//        }
//     }
//     return exist;
//   }

console.log(check([66, 101], 66), '->',  true);
console.log(check([101, 45, 75, 105, 99, 107], 107), '->',  true);
console.log(check(['t', 'e', 's', 't'], 'e'), '->', true);
console.log(check(['what', 'a', 'great', 'kata'], 'kat'), '->', false);
// sitas ciklas jei nuo pradzios iki pabaigos... nereikia toliau eiti... 
console.log(check([1, 0, 0, 0, 0, 0, 0, 0], 1), '->', true);

// Other solutions:

const check3 = (a,x) => a.includes(x);

function check4(a,x){
    return a.includes(x);
  };

function check5(a,x){
    return a.indexOf(x) > -1 ? true : false;
  };

function check6(a,x){
    return a.indexOf(x) > -1;
  };
  
const check7 = (a, x) =>
  a.some(val => val === x);

const check8 = (array, value) => !!~array.indexOf(value);

