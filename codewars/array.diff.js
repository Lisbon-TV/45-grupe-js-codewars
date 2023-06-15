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

