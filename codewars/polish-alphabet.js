console.clear();

correctPolishLetters = string => string.replace(/[ąćęłńóśźż]/g, replacer => 'acelnoszz'['ąćęłńóśźż'.indexOf(replacer)])




console.log(correctPolishLetters("Jędrzej Błądziński"),"Jedrzej Bladzinski");
console.log(correctPolishLetters("Lech Wałęsa"),"Lech Walesa");
console.log(correctPolishLetters("Maria Skłodowska-Curie"),"Maria Sklodowska-Curie");

