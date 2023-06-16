console.clear();



function differenceInAges (ages) {

    let max = Math.max(...ages),
        min = Math.min(...ages)
        diff = max - min
        
    return [min, max, diff]
}


// differenceInAges = ages => [Math.min(...ages), Math.max(...ages), Math.max(...ages) - Math.min(...ages)];

console.log(differenceInAges([82, 15, 6, 38, 35]), [6, 82, 76]);
console.log(differenceInAges([57, 99, 14, 32]), [14, 99, 85]);

// Solutions

// function differenceInAges(ages){
//     const min = Math.min(...ages);
//     const max = Math.max(...ages);
    
//     return [min, max, max-min];
//   }


//   const differenceInAges = (ages) => {
//     let youngest = Math.min.apply(null, ages);
//     let oldest = Math.max.apply(null, ages);
//     return [youngest, oldest, oldest - youngest];
//   };

//   function differenceInAges(ages){
//     return [Math.min(...ages),Math.max(...ages),Math.max(...ages)-Math.min(...ages)]
//   }

//   const differenceInAges = a => (min = Math.min(...a),max = Math.max(...a),[min,max,max-min])

//   const differenceInAges = ages =>
//   (val => val.concat(val[1] - val[0]))
//   ([Math.min(...ages), Math.max(...ages)]);

//   function differenceInAges(ages){
//     ages.sort( function(a,b){ return a-b;} )
//     return [ages[0], ages[ages.length -1], ages[ages.length -1] - ages[0] ]
//     }

//     function differenceInAges(ages){

//         ages = ages.sort((a,b) => a -b);
        
//         let youngest = ages[0];
//         let oldest = ages.pop();
        
        
//         return new Array(youngest, oldest, (oldest-youngest));
//         }

// function differenceInAges(ages){
//    console.log(ages.sort((a, b) => a -b));
//    ages = ages.sort((a, b) => a -b);
    
// return [ages[0], ages[ages.length -1], ages[ages.length-1] - ages[0]];
//             }


//             function differenceInAges(ages) {
//                 let sorted = ages.sort((a,b) => a-b)
//                 let youngest = sorted[0];
//                 let oldest = sorted[sorted.length - 1];
//                 let diffYoungestOldest = (oldest - youngest);
                
//                 return [youngest, oldest, diffYoungestOldest];
//               } 