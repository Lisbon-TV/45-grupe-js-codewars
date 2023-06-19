console.clear();

/*
Description:
Write a function getDrinkByProfession/get_drink_by_profession() that receives as input parameter a string, and produces outputs according to the following table:

Input	Output
"Jabroni"	"Patron Tequila"
"School Counselor"	"Anything with Alcohol"
"Programmer"	"Hipster Craft Beer"
"Bike Gang Member"	"Moonshine"
"Politician"	"Your tax dollars"
"Rapper"	"Cristal"
anything else	"Beer"
Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer."

Make sure you cover the cases where certain words do not show up with correct capitalization. For example, getDrinkByProfession("pOLitiCIaN") should still return "Your tax dollars".
*/



function getDrinkByProfession(param) {
    param = param.toLowerCase();
    
    switch(param) {
      case "jabroni": return "Patron Tequila";
      case "school counselor": return "Anything with Alcohol";
      case "programmer": return "Hipster Craft Beer";
      case "bike gang member": return "Moonshine";
      case "politician": return  "Your tax dollars";
      case "rapper": return "Cristal";
      default: return "Beer";
    }
  }


// 
console.log(getDrinkByProfession('programmer'));

console.log
(getDrinkByProfession("jabrOni"), "Patron Tequila", "'Jabroni' should map to 'Patron Tequila'");
console.log
(getDrinkByProfession("scHOOl counselor"), "Anything with Alcohol", "'School Counselor' should map to 'Anything with alcohol'");
console.log
(getDrinkByProfession("prOgramMer"), "Hipster Craft Beer", "'Programmer' should map to 'Hipster Craft Beer'");
console.log
(getDrinkByProfession("bike ganG member"), "Moonshine", "'Bike Gang Member' should map to 'Moonshine'");
console.log
(getDrinkByProfession("poLiTiCian"), "Your tax dollars", "'Politician' should map to 'Your tax dollars'");
console.log
(getDrinkByProfession("rapper"), "Cristal", "'Rapper' should map to 'Cristal'");
console.log
(getDrinkByProfession("pundit"), "Beer", "'Pundit' should map to 'Beer'");
console.log
(getDrinkByProfession("Pug"), "Beer", "'Pug' should map to 'Beer'");


// Other Solutions:

// much better!
const drinks = {
    "jabroni": "Patron Tequila",
    "school counselor": "Anything with Alcohol",
    "programmer": "Hipster Craft Beer",
    "bike gang member": "Moonshine",
    "politician": "Your tax dollars",
    "rapper": "Cristal"
  }
  
  const getDrinkByProfession = profession => drinks[profession.toLowerCase()] || "Beer"

  function getDrinkByProfession(param){
    let map = new Map([
            ["jabroni", "Patron Tequila"],
            ["school counselor", "Anything with Alcohol"],
            ["programmer", "Hipster Craft Beer"],
            ["bike gang member", "Moonshine"],
            ["politician", "Your tax dollars"],
            ["rapper", "Cristal"]
            ]);
        
     let normal = param.toLowerCase();
     return map.has(normal) ? map.get(normal) : "Beer";
  }

  function getDrinkByProfession(param) {
    switch (param.toLowerCase()) {
      case 'jabroni':
        return 'Patron Tequila';
      case 'school counselor':
        return 'Anything with Alcohol';
      case 'programmer':
        return 'Hipster Craft Beer';
      case 'bike gang member':
        return 'Moonshine';
      case 'politician':
        return 'Your tax dollars';
      case 'rapper':
        return 'Cristal';
      default:
        return 'Beer';
    }
  }

  function getDrinkByProfession(param){
    var list = {
    "jabroni": "Patron Tequila",
    "school counselor": "Anything with Alcohol",
    "programmer": "Hipster Craft Beer",
    "bike gang member": "Moonshine",
    "politician": "Your tax dollars",
    "rapper": "Cristal"
    }
    return list[param.toLowerCase()]||"Beer";
}

function getDrinkByProfession(param){
    switch(param.toLowerCase()){
      case 'jabroni':
        return 'Patron Tequila'
        break;
      case 'school counselor':
        return 'Anything with Alcohol'
        break;
     case 'programmer':
       return 'Hipster Craft Beer'
       break;
     case 'bike gang member':
       return 'Moonshine'
       break;
     case 'politician':
       return 'Your tax dollars'
       break;
     case 'rapper':
       return 'Cristal'
       break;
     default:
       return 'Beer'
    }
  
  }

  const getDrinkByProfession = param =>
  ({
    jabroni: `Patron Tequila`,
    'school counselor': `Anything with Alcohol`,
    programmer: `Hipster Craft Beer`,
    'bike gang member': `Moonshine`,
    politician: `Your tax dollars`,
    rapper: `Cristal`,
  })[param.toLowerCase()] || `Beer`;

  const getDrinkByProfession = str =>{
    let arr = ["Jabroni",	"Patron Tequila", "School Counselor", 
    "Anything with Alcohol", "Programmer",	"Hipster Craft Beer", 
    "Bike Gang Member",	"Moonshine", "Politician",	"Your tax dollars", 
    "Rapper", "Cristal", "any",	"Beer"];
    
    const arrLow = arr.map(e => e.toLowerCase());
    let strLow = str.toLowerCase();
    let ind = arrLow.indexOf(strLow);
    
    if (!arrLow.includes(strLow)){
      strLow = strLow.replace(strLow[0], strLow[0].toUpperCase());
      arr = arr.map(e => e == 'any' ? strLow : e);
      ind = 12;
    }
    
    return ind%2 == 0 ? arr[ind+1] : arr[ind-1];
      
    }

function getDrinkByProfession(param){
        let p = ["Jabroni", "School Counselor", "Programmer", "Bike Gang Member", "Politician", "Rapper"];
        let d = [	"Beer", "Patron Tequila"	,"Anything with Alcohol" ,	"Hipster Craft Beer","Moonshine"	,"Your tax dollars"	,"Cristal",	"Beer"];
        return d[p.findIndex(e=> new RegExp(e,"i").test(param) ) +1];  
      }

function getDrinkByProfession(param){
        var cocktails = {'jabroni':'Patron Tequila', 'school counselor':'Anything with Alcohol',
      'programmer':'Hipster Craft Beer', 'bike gang member':'Moonshine', 'politician':'Your tax dollars',
      'rapper':'Cristal'}
      return cocktails[param.toLowerCase()] || 'Beer';
    }


const getDrinkByProfession = (() => {
    const def = 'Beer';
      
    const prefs = {
          'school counselor': 'Anything with Alcohol',
          'bike gang member': 'Moonshine',
                'programmer': 'Hipster Craft Beer',
                'politician': 'Your tax dollars',
                   'jabroni': 'Patron Tequila',
                    'rapper': 'Cristal'
        };
        
        return param => prefs[param.toLowerCase()] || def;
        
      })();

function getDrinkByProfession(param) {
        param = param.toLowerCase()
        var professions = ["jabroni", "school counselor", "programmer", "bike gang member", "politician", "rapper"];
        var drinks = ["Patron Tequila", "Anything with Alcohol", "Hipster Craft Beer", "Moonshine", "Your tax dollars", "Cristal","Beer"];
       
        for (var i = 0; i < professions.length; i++) {
            if (param == professions[i]) {
                return drinks[i];
            }
        } 
        return drinks[drinks.length-1];
    }

const output = ['Patron Tequila', 'Anything with Alcohol', 'Hipster Craft Beer', 'Moonshine', 'Your tax dollars', 'Cristal']
const input = ['jabroni', 'school counselor', 'programmer', 'bike gang member', 'politician', 'rapper']
const getDrinkByProfession = s => input.includes(s.toLowerCase()) ? output[input.indexOf(s.toLowerCase())] : 'Beer'

function getDrinkByProfession(param) {
    let res = param.toLowerCase()
    return res == "jabroni" ? "Patron Tequila"
         : res == "school counselor" ? "Anything with Alcohol"
         : res == "programmer" ? "Hipster Craft Beer"
         : res == "bike gang member" ? "Moonshine"
         : res == "politician" ? "Your tax dollars"
         : res == "rapper" ? "Cristal"
         : "Beer"     
  }

  getDrinkByProfession=Q=>({jabroni:'Patron Tequila','school counselor':'Anything with Alcohol',programmer:'Hipster Craft Beer','bike gang member':'Moonshine',politician:'Your tax dollars',rapper:'Cristal'})[Q.toLowerCase()]||'Beer'

