console.clear();

correctPolishLetters = string => string.replace(/[ąćęłńóśźż]/g, replacer => 'acelnoszz'['ąćęłńóśźż'.indexOf(replacer)])




console.log(correctPolishLetters("Jędrzej Błądziński"),"Jedrzej Bladzinski");
console.log(correctPolishLetters("Lech Wałęsa"),"Lech Walesa");
console.log(correctPolishLetters("Maria Skłodowska-Curie"),"Maria Sklodowska-Curie");

// Solutions:

// function correctPolishLetters (string) {
//     var dict = {'ą':'a','ć':'c','ę':'e','ł':'l','ń':'n','ó':'o','ś':'s','ź':'z','ż':'z'};
//     return string.replace(/[ąćęłńóśźż]/g, match => dict[match]);
//   }


//   var polishLetters = {
//     "ą": "a",
//     "ć": "c",
//     "ę": "e",
//     "ł": "l",
//     "ń": "n",
//     "ó": "o",
//     "ś": "s",
//     "ź": "z",
//     "ż": "z",
// };

// function correctPolishLetters (string) {
//   return string.split('').map((c) => polishLetters[c] || c).join("");
// }

// function correctPolishLetters (string) {
//     return string
//     .replace(/ł/g, 'l')
//     .replace(/ą/g, 'a')
//     .replace(/ć/g, 'c')
//     .replace(/ę/g, 'e')
//     .replace(/ń/g, 'n')
//     .replace(/ó/g, 'o')
//     .replace(/ś/g, 's')
//     .replace(/ź/g, 'z')
//     .replace(/ż/g, 'z')
//   }


//   function correctPolishLetters(s) {
//     return s.replace(/[ąćęłńóśźż]/g, c => "acelnoszz"["ąćęłńóśźż".indexOf(c)])
//   }

//   const correctPolishLetters=s=>s.replace(/ą/g,"a").replace(/ć/g,"c").replace(/ę/g,"e").replace(/ł/g,"l").replace(/ń/g,"n").replace(/ó/g,"o").replace(/ś/g,"s").replace(/ź|ż/g,"z");


//   const c1="ąćęłńóśźż",c2="acelnoszz",correctPolishLetters =s=>s.replace(/./g,x=>(y=c1.indexOf(x))+1?c2[y]:x)

//   function correctPolishLetters (string) {
//     let letters = {ą: "a",
//   ć: "c",
//   ę: "e",
//   ł: "l",
//   ń: "n",
//   ó: "o",
//   ś: "s",
//   ź: "z",
//   ż: "z"};
//   for (let i in letters){
//     string = string.split('').map(e => e == i ? letters[i] : e).join('');
//   }
//   return string;
//   }

//   const correctPolishLetters = s =>
//   s.replace(/[ąćęłńóśźż]/g, val => `acelnoszz`[`ąćęłńóśźż`.indexOf(val)]);


//   function correctPolishLetters (string) {
//     // your code
    
//     var map = {
//     ą: 'a',
//     ć: 'c',
//     ę: 'e',
//     ł: 'l',
//     ń: 'n',
//     ó: 'o',
//     ś: 's',
//     ź: 'z',
//     ż: 'z'
//     }
//     return string.replace(/[ąćęłńóśźż]/gi, function(s){
//       return map[s];
//     });
//   }

//   const mapping = {
//     'ą': 'a',
//     'ć': 'c',
//     'ę': 'e',
//     'ł': 'l',
//     'ń': 'n',
//     'ó': 'o',
//     'ś': 's',
//     'ź': 'z',
//     'ż': 'z',
// }

// function correctPolishLetters (string) {
//   return string.replace(/[ąćęłńóśźż]/g, (x) => mapping[x])
// }


//   const correctPolishLetters = string => string.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/ł/g, 'l');


//   correctPolishLetters=s=>s.replace(/./g,m=>({ą:"a",ć:"c",ę:"e",ł:"l",ń:"n",ó:"o",ś:"s",ź:"z",ż:"z"}[m]||m))


//   function correctPolishLetters (str) {
//     const vocabulary = {
//      'ą' : 'a',
//      'ć' : 'c',
//      'ę' : 'e',
//      'ł' : 'l',
//      'ń' : 'n',
//      'ó' : 'o',
//      'ś' : 's',
//      'ź' : 'z',
//      'ż' : 'z'
//      };
     
//      return [...str].map(letter => vocabulary[letter] || letter).join('');
//    }
//    Best Practices1Clever1
//     0ForkCompare with your solutionLink

    
//     function correctPolishLetters (string) {
   
//         const alphabet = {'ą':'a','ć':'c','ę':'e','ł':'l','ń':'n','ó':'o','ś':'s','ź':'z','ż':'z'}
     
//          return string.split('').map(letters => alphabet[letters] || letters).join('')
         
     
//        }

// function correctPolishLetters(inputString) {
//     // mapping for characters
//     const mapping = {
//       ą: "a",
//       ć: "c",
//       ę: "e",
//       ł: "l",
//       ń: "n",
//       ó: "o",
//       ś: "s",
//       ź: "z",
//       ż: "z",
//     };
  
//     return (
//       inputString
//         // split the string into an array
//         .split("")
//         .map(
//           (char) =>
//             // check if mapping has a key with the current character
//             Object.keys(mapping).includes(char)
//               ? mapping[char] // if yes, return its replacement
//               : char // if not, return it unchanged
//         )
//         // join the array to a string
//         .join("")
//     );
//   }

//     // your code
//     let quo = "";
//     const char = {
//   ą: "a",
  
//   ć: "c",
  
//   ę: "e",
  
//   ł: "l",
  
//   ń: "n",
  
//   ó: "o",
  
//   ś: "s",
  
//   ź: "z",
  
//   ż: "z" };
    
//     for(const lett of str){
//       quo += (char[lett] ? char[lett] : lett);
//     }
      
//     return quo;
//   }
