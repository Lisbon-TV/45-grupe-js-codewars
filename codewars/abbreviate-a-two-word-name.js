console.clear();

let name = 'Two Words';

function abbrevName(name){
    let [first, last] = name.split(' ');
    return first[0].toUpperCase() + '.' + last[0].toUpperCase();
  }

// maybe?
// function inicialai(vardas, pavarde) {
//     return `${vardas[0]}.${pavarde[0]}.`;
// }

// const ini1 = inicialai('Chuck', 'Norris');
// const ini2 = inicialai('Pamela', 'Anderson');

// console.log('Inicialas 1:', ini1);
// console.log('Inicialas 2:', ini2);


console.log(abbrevName("Sam Harris"), "S.H");
// console.log(abbrevName("Patrick Feenan"), "P.F");
// console.log(abbrevName("Evan Cole"), "E.C");
// console.log(abbrevName("P Favuzzi"), "P.F");
// console.log(abbrevName("David Mendieta"), "D.M");

// Other solutions: 

// function abbrevName(name){

//     return name.split(' ').map(i => i[0].toUpperCase()).join('.')

// }


///
// const abbrevName = name => name.match(/\b\w/g).join('.').toUpperCase()



///
// function abbrevName(name){

//     return name[0].toUpperCase() + "." + name[name.indexOf(" ")+1].toUpperCase();

// }

///
// const abbrevName = (name) => {
//     return name.split(" ").map(name => name[0].toUpperCase()).join(".");
//   };


//

// function abbrevName(name){
//     if (typeof name === 'string') {
//       let names = name.split(' ');
//       return `${names[0][0]}.${names[1][0]}`.toUpperCase();
//     }
//     console.log(arguments.callee.name + ': Argument must be string!');
//   }

//
// function abbrevName(name){

//     const [firstName, lastName] = name.split(' ')
//     const firstInitial = firstName.charAt(0).toUpperCase()
//     const secondInitial = lastName.charAt(0).toUpperCase()
//     return firstInitial + '.' + secondInitial

// }

//
// const abbrevName = name =>
//   name
//     .split` `
//     .map(part => part[0].toUpperCase())
//     .join('.')

// //
// function abbrevName(name){
//     return name.match(/\b(\w)/g).toString().toUpperCase().replace(',', '.');
//   }

//   //

//   function abbrevName(name){
//     //converts name to uppercase
//         name = name.toUpperCase();
//     //locates the start of the second initial just after the "space" character
//         let secondInitial = name.indexOf(" ") + 1;
//     //slice the first and second initials with a dot between
//         let initials = `${name.slice(0,1)}.${name.slice(secondInitial,secondInitial + 1)}`
//         return initials;
//     }
//
// function abbrevName(name, nms = name.split(' ')){
//     return `${nms[0][0].toUpperCase()}.${nms[1][0].toUpperCase()}`
//   }