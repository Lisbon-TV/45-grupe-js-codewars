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


// review: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
// nesuprantu - klausti mentoriaus? Kaip naudotis puslapiu!

function check4(a,x){
    return a.includes(x);
  };

// indexOf   rodo buten ta reiskme in array... 
// neaisku > -1 ? 
// neaisku true : false 
function check5(a,x){
    return a.indexOf(x) > -1 ? true : false;
  };

function check6(a,x){
    return a.indexOf(x) > -1;
  };
  
const check7 = (a, x) =>
  a.some(val => val === x);

const check8 = (array, value) => !!~array.indexOf(value);

// used to be one key variable in js, which was var
// let and const is a block variable;
// var is used within the scope of their function, as with loops, 
// but not outside! also the global scope
// but may match same variable within the windows 
// not the best usage! We don't know further use of var variable in coding! 
// if matched further, it can override and cause issues! 
// In this closed excample, it's OK to use var!

// minuses: allows var variables to redeclare multiple times, when not intended!
// let and const won't ever let us do this!

/*
Exg. 
if(true) {
    varVarVariable = 'This is not true';
}

// outside function:
    varVariable= = 'This is false';

console.log(varVarriable);

let letVariable = 'true';
let letVariable = 'false';

console.log(letVariable);

Exg. Var will allow, let and const won't let it! 

console.log(varVariable);

var varvariable = 'true';  // undefined 

console.log(varVariable); // here will not let change value!

// const allows to change the actual properties,
// but not the values of reaassigning the variable to a diferent value,
// but not actually changing the different values in that property! 

egz. :

const constVar = {name: 'Bob'}
let letVar = 1;

constVar.name = 'Sally';
console.log(constVar);

Consclutsion: use const over let and over var!
almost never use var, better change your design and use let and const!

egz. hoisting!



*/


function check9(a, x) {
    let check = false
    for(var j in a){
        if(a[j] == x){
          check = true
        }
    }
    return check
  }

