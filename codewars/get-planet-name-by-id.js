console.clear();

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch

function getPlanetName(id){
    var name;
    switch(id){
      case 1:
        name = 'Mercury'
        break;
      case 2:
        name = 'Venus'
        break;
      case 3:
        name = 'Earth'
        break;
      case 4:
        name = 'Mars'
        break;
      case 5:
        name = 'Jupiter'
        break;
      case 6:
        name = 'Saturn'
        break;
      case 7:
        name = 'Uranus'
        break;
      case 8:
        name = 'Neptune'
    }
    
    return name;
  }

console.log(getPlanetName(2), 'Venus');
console.log(getPlanetName(5), 'Jupiter');
console.log(getPlanetName(3), 'Earth');


Solutions: 


function getPlanetName(id){
    switch(id){
      case 1:
        return 'Mercury'
      case 2:
        return 'Venus'
      case 3:
        return 'Earth'
      case 4:
        return 'Mars'
      case 5:
        return 'Jupiter'
      case 6:
        return 'Saturn'
      case 7:
        return 'Uranus'
      case 8:
        return 'Neptune'
    }
  
  }

function getPlanetName(id){
    return {
      1: 'Mercury',
      2: 'Venus',
      3: 'Earth',
      4: 'Mars',
      5: 'Jupiter',
      6: 'Saturn',
      7: 'Uranus',
      8: 'Neptune'
    }[id]
  }

  function getPlanetName(id){
    var name = {
      1: 'Mercury',
      2: 'Venus',
      3: 'Earth',
      4: 'Mars',
      5: 'Jupiter',
      6: 'Saturn',
      7: 'Uranus',
      8: 'Neptune',
    };
    
    return name[id];
  }



  function getPlanetName(id){  
    switch(id){
      case 1:
        return "Mercury";
      case 2:
        return "Venus";
      case 3:
        return "Earth";
      case 4:
        return "Mars";
      case 5:
        return "Jupiter";
      case 6:
        return "Saturn";
      case 7:
        return "Uranus";
      case 8:
        return "Neptune";
      default:
        return "invalid planet id in function getPlanetName()";
    }
  }

  function getPlanetName(id){
    var name;
    switch(id){
      case 1:
        name = 'Mercury'
        break;
      case 2:
        name = 'Venus'
        break;
      case 3:
        name = 'Earth'
        break;
      case 4:
        name = 'Mars'
        break;
      case 5:
        name = 'Jupiter'
        break;
      case 6:
        name = 'Saturn'
        break;
      case 7:
        name = 'Uranus'
        break;
      case 8:
        name = 'Neptune'
        break;
    }
    
    return name;
  }


  function getPlanetName(i){
    return (['Mercury','Venus','Earth','Mars','Jupiter','Saturn','Uranus','Neptune'])[i-1];
  }

  const getPlanetName = id => ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'][id-1];

  const BODIES = ['Sun', 'Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];
const getPlanetName = id => BODIES[id];

const getPlanetName = id =>
  [`Mercury`, `Venus`, `Earth`, `Mars`, `Jupiter`, `Saturn`, `Uranus`, `Neptune`][--id];

  function getPlanetName(id){
    var name;
   if(id === 1) name = 'Mercury';
   if(id === 2) name = 'Venus';
   if(id === 3) name = 'Earth';
   if(id === 4) name = 'Mars';
   if(id === 5) name = 'Jupiter';
   if(id === 6) name = 'Saturn';
   if(id === 7) name = 'Uranus';
   if(id === 8) name = 'Neptune';
    return name;
  }

  const getPlanetName = id => {
    const planets = new Map([
      [1, 'Mercury'],
      [2, 'Venus'],
      [3, 'Earth'],
      [4, 'Mars'],
      [5, 'Jupiter'],
      [6, 'Saturn'],
      [7, 'Uranus'],
      [8, 'Neptune']
    ]);
  
    return planets.get(id);
  }


  function getPlanetName(id){
    let name;
    switch(id){
      case 1:
        name = 'Mercury';
                break;
      case 2:
        name = 'Venus';
                break;
      case 3:
        name = 'Earth';
                break;
      case 4:
        name = 'Mars';
                break;
      case 5:
        name = 'Jupiter';
                break;
      case 6:
        name = 'Saturn';
                break;
      case 7:
        name = 'Uranus';
                break;
      case 8:
        name = 'Neptune';
                break;
    }
    
    return name;
  }

  function getPlanetName(id){
    const names = [
      null, 
      'Mercury', 
      'Venus', 
      'Earth', 
      'Mars', 
      'Jupiter', 
      'Saturn', 
      'Uranus', 
      'Neptune',
      'Pluto' //I still believe in you, Pluto!
    ]
    
    return names[id];
  }

  const getPlanetName = id => 'Mercury,Venus,Earth,Mars,Jupiter,Saturn,Uranus,Neptune'.split(',')[id-1]

  const getPlanetName = id => {
	switch (id) {
		case 1: return 'Mercury';
		case 2: return 'Venus';
		case 3: return 'Earth';
		case 4: return 'Mars';
		case 5: return 'Jupiter';
		case 6: return 'Saturn';
		case 7: return 'Uranus';
		case 8: return 'Neptune';
		case 9: return 'Pluto';
		default: return 'Nibiru';
	}
}


function getPlanetName(id){
    switch(id){
      case 1: return 'Mercury';
      case 2: return 'Venus';
      case 3: return 'Earth';
      case 4: return 'Mars';
      case 5: return 'Jupiter';
      case 6: return 'Saturn';
      case 7: return 'Uranus';
      case 8: return 'Neptune';
      break;
      default: return 'error';
    }
    
    return name;
  }


  function getPlanetName(id){
    let name = '';
  
    switch (id) {
      case 1:
        name = 'Mercury';
        break;
      case 2:
        name = 'Venus';
        break;
      case 3:
        name = 'Earth';
        break;
      case 4:
        name = 'Mars';
        break;
      case 5:
        name = 'Jupiter';
        break;
      case 6:
        name = 'Saturn';
        break;
      case 7:
        name = 'Uranus';
        break;
      case 8:
        name = 'Neptune';
        break;
    }
    
    return name;
  }


  getPlanetName=i=>[,'Mercury','Venus','Earth','Mars','Jupiter','Saturn','Uranus','Neptune'][i]

  onst getPlanetName = (id) => ({
    1: 'Mercury',
    2: 'Venus',
    3: 'Earth',
    4: 'Mars',
    5: 'Jupiter',
    6: 'Saturn',
    7: 'Uranus',
    8: 'Neptune',
  }[id]);

  function getPlanetName(id){
    return ([ "Mercury" , "Venus" , "Earth" , "Mars" , "Jupiter" , "Saturn" , "Uranus" , "Neptune" ])[id-1];
  }


  var getPlanetName = (id) => id === 1 ? 'Mercury' 
                                                  : id === 2 ? 'Venus' 
                                                  : id === 3 ? 'Earth' 
                                                  : id === 4 ? 'Mars' 
                                                  : id === 5 ? 'Jupiter' 
                                                  : id === 6 ? 'Saturn'
                                                  : id === 7 ? 'Uranus' 
                                                  : id === 8 ? 'Neptune' 
                                                  : 'Sorry Pluto';
