console.clear();


function arrayDiff(a, b) {
    return a.filter(ele => !b.includes(ele));
}



console.log(arrayDiff([1,2], [1]), [2], "a was [1,2], b was [1]");
console.log(arrayDiff([1,2,2], [1]), [2,2], "a was [1,2,2], b was [1]");
console.log(arrayDiff([1,2,2], [2]), [1], "a was [1,2,2], b was [2]");
console.log(arrayDiff([1,2,2], []), [1,2,2], "a was [1,2,2], b was []");
console.log(arrayDiff([], [1,2]), [], "a was [], b was [1,2]");
console.log(arrayDiff([1,2,3], [1,2]), [3], "a was [1,2,3], b was [1,2]")

// Metoriaus ats: 
// const arr1 = [1, 3, 2, 3, 4, 5, 3]
// const arr2 = [3, 2]
// function difference(a1, a2) {
//   const res = a1.filter(item => !a2.includes(item))
//   console.log(res)
// }
// difference(arr1, arr2)


//Other solutions:

// function arrayDiff(a, b) {
//     if(b.length==0 || a.length==0)
//       return a;
//     for(let i =0;i<a.length;i++){
//       for(let j=0;j<b.length;j++){
//         if(a[i]==b[j]){
//           a.splice(i,1);
//           i--;
//         }
//       }
//     }
//     return a;
//   }


//   var array_diff = (a, b) => a.filter(item => b.indexOf(item) < 0)

//   function array_diff(a, b) {
//     return a.filter(item => !b.includes(item));
//   }


//   function arrayDiff(a, b) {
//     // PREP
//     // (P)arameters - takes in 2 arrays
//     // (R)eturn - returns an array a without
//     // anything in array b
//     // (E)xamples - 
//     //  ([1, 2], [1]) => [2]
//     // ([1, 2, 2], [2]) => [1]
//     // (P)seudocode - 
//     // Create new array
//     let newArr = []
//     // Loop through array a
//     for (let i = 0; i < a.length; i++) {
//       // Only push elements from a that
//       // aren't in b
//       if (!b.includes(a[i])) {
//         newArr.push(a[i])
//       }
//     }
//     return newArr
//   }

//   function array_diff(a, b) {
//     return a.filter(function (x) {
//         var bool = true;
//       b.forEach(function(y) {
//           if (x == y) bool = false; 
//       });
//       return bool;
//     });
//   }


//   function arrayDiff(a, b) {
//     b.forEach(
//       value_in_b => a = a.filter(
//         vaulue_in_a=>vaulue_in_a!==value_in_b
//       )
//     );
//     return a    
//   }

//   function arrayDiff(a, b) {
//     function duplicate(c) {
//       let cUnique = [];
//       c.forEach(element => {
//         if (!cUnique.includes(element)) {
//           cUnique.push(element)
//         }
//       });
//       return cUnique
//     }
  
//     if (a.length ===  0 ){
  
//      return a
  
//    } else if ( b.length === 0 ) {
  
//       return a
  
//     } else {
  
//       let x = a
//       let y = b
  
    
  
//       return x.filter(n => y.indexOf(n) === -1);
//     }
  
//   }

//   function arrayDiff(a, b) {
//     for (let i = 0; i < a.length; i++) {
//         for (let j = 0; j < b.length; j++) {
//             if (a[i] === b[j]) {
//                 a.splice(i, 1);
//                 i--;
//             }
//         }
//     }
//     return a;
// }

// function array_diff(a, b) {
//     return a.filter(function(value)
//     {
//       return !(b.includes(value))  
//     });
//   }


//   function array_diff(a, b) {
//     return a.filter(function(v){ return b.indexOf(v) < 0 })  
//   }

