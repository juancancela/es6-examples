// Arrow functions are a new way to define functions in Javascript. There are
// some key differences compared to legacy function definition methods in JS:
// Theres no this, cant be instantiated with new, and no have no prototype.
// Example:
var binomio = (a, b) => (a * a) + (2 * a * b) + (b * b);


//.. is the same than:
function binomio(a, b){
  return (a * a) + (2 * a * b) + (b * b);
}


// Another example where arrow functions are optimal is for sorting. In example:
var sortedPrices = arrayOfPrices.sort( (a, b) => a - b);
