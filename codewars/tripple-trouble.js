console.clear();

/*
Triple Trouble
Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!

E.g. Input: "aa", "bb" , "cc" => Output: "abcabc"

Note: You can expect all of the inputs to be the same length.
*/

// function tripleTrouble(one, two, three){
//         let output =[];
//         for(let i = 0; i < one.length; i++){
//           output.push(one[i]);
//           output.push(two[i]);
//           output.push(three[i]);
//         }
//         return output.join('');
//        }


// console.log(tripleTrouble("aaa","bbb","ccc"), "abcabcabc");
// console.log(tripleTrouble("aaaaaa","bbbbbb","cccccc"), "abcabcabcabcabcabc");
// console.log(tripleTrouble("burn", "reds", "roll"), "brrueordlnsl");
// console.log(tripleTrouble("Sea","urn","pms"), "Supermans"); 
// console.log(tripleTrouble("LLh","euo","xtr"), "LexLuthor");

// // Other Solutions:

// function tripleTrouble(one, two, three) {
//     var result = "";
//     for (let i = 0; i < one.length; i++) {
//       result += one.charAt(i) + two.charAt(i) + three.charAt(i);
//     }
//     return result;
//   }


// // same:

// function tripleTrouble(one, two, three){
//     let x = ''
//       for(i = 0; i<one.length; i++) {
//         x +=  one[i] + two[i] + three[i]
//       }
//     return x
//    }

// const tripleTrouble = (one, two, three) => one.split("").map((letter, index) => letter + two[index] + three[index]).join("");

// // with global: 

// function tripleTrouble(one, two, three){
//     return one.replace(/./g,(v,i)=>v+two[i]+three[i])
//    }

// const tripleTrouble = (a,b,c) => Array.from(a, (x,i) => x+b[i]+c[i]).join('')

// function tripleTrouble(one, two, three){
//     var result="";
//     one.split("");
//     two.split("");
//     three.split("");
//     for(i=0;i<one.length;i++) {
//       result+=one[i]+two[i]+three[i];
//     }
//     return result;
//    }

// function tripleTrouble(one, two, three){
//     let len = [one, two, three].sort((a,b)=> b.length - a.length)[0]
//     return [...len].map((_, i)=> (one[i] || '') + (two[i] || '') + three[i]).join('')
//    }


// // Recursive solution

// const tripleTrouble = (...arg) =>
//   !arg[0][0] ? '' : arg.map(i => i[0]).join('') + tripleTrouble(...arg.map(i => i.slice(1)))

// function tripleTrouble(one, two, three){
//     return one.split('').map((l, p)=>one[p]+two[p]+three[p]).join('')
//    }
   
// function tripleTrouble(one, two, three){
//     let result = '';
//     for(let i = 0; i < one.length; i++) {
//       result += one[i] 
//       result += two[i] 
//       result += three[i] 
//     }
//     return result;
//    }

// function tripleTrouble(one, two, three) {
//     let str = "";
    
//     for (let i = 0; i < one.length; i++) {
//       str += one[i] + two[i] + three[i];
//     }
    
//     return str;
//   }