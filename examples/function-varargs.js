// ES6 provides a java varargs like way to pass multiple parameters. In person function, 
// skills is treated as an array of multiple values. Check:
function person(name, ...skills) {
  console.log("name: " + name);
  console.log("skills");
  skills.forEach(function(skill){
    console.log(skill + ",");
  });
}
