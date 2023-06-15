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

// const abbrevName = name => name.match(/\b\w/g).join('.').toUpperCase()

