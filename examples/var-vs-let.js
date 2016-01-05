// Using var, variable declaration is moved to the top of the function
// declaraction, no matter where is initially declared.

function dosth(value){
  if(value){
    var test;
    console.log("value");
  }

  // Intituively you may think test variable does not exist if value is not true,
  // but due to variable hoisting, thats not true.
  console.log("finished execution");
}

// This is how Javascript changes your function under the hood
function dosth_hoisted(value){
  var test;

  if(value){
     console.log("value");
  }

  console.log("finished execution");
}


// Variables initialized with let follow the traditional approach of defining
// block level declarations (so, no variable hoisting, so, what you usually
// se in traditional Java like languages)
function dosth_let(){
  if(value){
    let test;
    console.log("value");
  }

  // If value is not evaluated as true, then test value wont exist.
  console.log("finished execution");
}
