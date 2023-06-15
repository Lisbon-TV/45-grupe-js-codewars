console.clear();


// function check(a, x) {
//     // your code here
//   }

function check(a, x) {
    return a.includes(x);
  }




console.log(check([66, 101], 66), true);
console.log(check([101, 45, 75, 105, 99, 107], 107), true);
console.log(check(['t', 'e', 's', 't'], 'e'), true);
console.log(check(['what', 'a', 'great', 'kata'], 'kat'), false);

// Other Solutions:


// onst check = (a,x) => a.includes(x);

// const check = (a, x) => a.includes(x); 

// // 1. includes() determines whether an array includes a certain value among its entries, 
// // returning true or false as appropriate. 


/*
(5) Use ES2015 method to see if array contains the value.
    Eliminate more cruft.
*/
const check = (a,x)=>a.includes(x)




/*
  (4) Eliminate all the overhead setup.
      Use the ES2015 SOME method to see if one or more
      of the array entries matches our target.
      Written in the form of a lambda (arrow function) to make it streamlined
    
    const check = (a,x)=>a.some(v=>v==x)
*/

/*
(3) Filter the Array
    Reduce it down to matching values or an empty set ... [66]
    Test the length of the array   [66].length > 0

  function check(a,x){
    return (a.filter(v=>v==x)).length > 0
  }
*/

/*
(2) Walk the array without ability to break the loop.
    Create a variable to hold the state of our match.
    Check if the target is found and return the findings

  function check(a,x){
    let foundTarget = false
    a.forEach((v,i,A)=>{
      if (v==x){ foundTarget = true}
    })
    return foundTarget
  }
*/

// function check(a,x){
//     return a.indexOf(x) > -1 ? true : false;
//   };

//   function check(a,x){
//     var result = false;
//     for(i = 0; i < a.length; i++){
//       if(a[i]==x){
//       result  = true;
//       }
     
//     }
//     return result;
//   };
//   check([1, "hey", false], 1);

//   function check(a,x){
//     return a.indexOf(x) > -1;
//   };

//   const check = (a, x) =>
//   a.some(val => val === x);

//   const check = (arr, x) => arr.some(item => item == x);

//   const check=(a,x)=> a.includes(x)


//   function check(a,x){
//     return a.indexOf(x)>=0;
//   };


//   const check = Function.prototype.call.bind(Array.prototype.includes);

//   function check(arr, el) {
//     return arr.includes(el)
//   }  // dupa


//   const check=(_,__)=>_.includes(__);

//   function check(a, x) {
//     let res = []
//     for (let i = 0; i < a.length; i++) {
//       if (a[i] == x) {
//         res.push(a[i])
//       }  
//     }
//     return res.length ? true : false;
//   }

//   function check(a,x){
//     return a.indexOf(x) === -1 ? false : true;
//   };

//   function check(a, x) {
//     let b = a.filter(el => el == x);
//     return b.length ? true : false;
//   }

//   function check(a, x) {
//     let b = a.findIndex(el => el == x);
//     return b < 0 ? false : true;
//   }

//   const check = (a, x) => !!a.some(e => e === x)


//   // function check(a, x) {
// // if ( a.includes(x) ) {
// //   return true
// // }
// //   return false
// // }
// const check = (a, x) => a.includes(x) ? true : false ; 

// const check = (array, item) => array.includes(item)

// const check = (a, x) => a.find(value => value === x) !== undefined

// function check(a, x) {
//     // your code here
//     if (a.includes(x) ){
//       return true
//     } else{
//       return false
//     }
//   }

//   function check(a, x) {
//     let i = 0;
//     let res = 0;
//     let count = 0;
//     while (i < a.length) {
//       if (a[i] == x) {  
//         res += a[i] 
//         count += 1
//       } 
//      i++
//     }
//     return count > 0 ? true : false;
//   }

//   function check(a, x) {
//     let b = a.indexOf(x);
//     if (b < 0) {
//       return false;
//     }
//     return true;
//   }

//   function check(a, x) {
//     let b = a.find(el => el == x);
//     return b == x;
//   }

//   function check(a = [], x) {
//     let pass = false;
//     a.forEach((element) => {
//       if (element == x) {
//         pass = true;
//         return;
//       }
//     });
  
//     return pass;
//   }


//   function check(a, x) {
//     let check = false
//     for(var j in a){
//         if(a[j] == x){
//           check = true
//         }
//     }
//     return check
//   }

//   function check(a, x) {
//     return a.filter(el => el == x)[0] == x ? true : false;
//   }
//   Best Practices1Clever0
//    0ForkCompare with your solutionLink


//    function check(a,x){
//     for(let i = 0; i < a.length; i++){
//     if(x == a[i]){
//     return true
//     }
//     }
//     return false
//     };


//     const check = (a, x) =>{
//         for(let i = 0;i<a.length;i++){
//           if(a[i] === x) return true
//         }
//         return false
//       }
  