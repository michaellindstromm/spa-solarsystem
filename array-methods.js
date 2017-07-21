let planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

let el = document.getElementById("planets");
let wordArea = document.getElementById("words");

/*
 Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets".
*/

planets.forEach(function(item) { //simple forEach just adding <br> to look a little better.
  el.innerHTML += item + "<br>"
  el.innerHTML += "<br>"
})

// Use the map method to create a new array where the first letter of each planet is capitalized

planets.map(function(e) { //Have to create function that has parameter. Takes input (which are the items in the array) at index[0] and uppercase, but then must slice first letter off of original input and add new uppercase letter.
  let capitalPlanets = e[0].toUpperCase() + e.slice(1) + "<br>";
  el.innerHTML += capitalPlanets;
  el.innerHTML += "<br>"
})

// Use the filter method to create a new array that contains planets with the letter 'e'

planets.filter(function(item){ // look at each item in array and if item does not have an "e" in the item, then the index of that is -1; If statement looking for !-1 and pushing item to an array.
  let ePlanets = [];
  let index = item.indexOf("e");
  if (index !== -1){
    ePlanets.push(item);
  }
  el.innerHTML += ePlanets + "<br>"
  el.innerHTML += "<br>"
})

// Use the reduce method to create a sentence from the words in the following array

let words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];

let newSent = words.reduce(function(prevWord, currWord){ //have to set a new variable when using .reduce() otherwise cannot get the return value out of anonymous function to DOM.
  return prevWord + " " + currWord;
})

wordArea.innerHTML = newSent;
