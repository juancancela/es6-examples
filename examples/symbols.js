// Symbol is a new data type introduced in ES6. 
// They serve to the purpouse of creating collition free property augmentations in objects.
// Check for example:

var isBlack = Symbol();
var tshirt = {};
tshirt[isBlack] = true;  
console.log(tshirt[isBlack]);  // prints true

// Its well worth that most of the scenarios where symbols can be used, WeakMaps probably fit better.
