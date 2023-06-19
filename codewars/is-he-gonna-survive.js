console.clear();

function hero(bullets, dragons){
    return bullets / 2 >= dragons;
    }


console.log(hero(10, 5), true);
console.log(hero(7, 4), false);
console.log(hero(4, 5), false);
console.log(hero(100, 40), true);
console.log(hero(1500, 751), false);
console.log(hero(0, 1), false);


// Other solutions: 

// const hero = (bullets, dragons) => dragons * 2 <= bullets;

// function hero(bullets, dragons){
//     return bullets >= dragons * 2
//   }

// function hero(bullets, dragons){
//     return bullets/dragons >= 2
//   }

// function hero(bullets, dragons){
// //Get Coding!
// return (bullets / 2 >= dragons) ? true : false;
// }

// hero = (bullets, dragons) =>{
//     if (bullets/2 >= dragons) {
//       return true;
//     }
//     else {
//       return false;
//     }
//     }

// const BULLETS_PER_DRAGON = 2;

//     function hero(bullets, dragons) {
//       const survive = bullets >= dragons * BULLETS_PER_DRAGON;
//       return survive;
//     }

// hero = (b, d) => d * 2 <= b;

// function hero(bullets, dragons){
//     return (bullets/2>=dragons)
//     }

// hero=(b,d)=>b>=d*2
