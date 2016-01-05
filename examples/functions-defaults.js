// If protocol parameter is not passed, it defaults to https
function create_url(protocol = "https", domain){
  return `${protocol}://${domain}`;
}

// If date is not provided, defaults to current date
function print_date(date = getCurrentDate()){
  console.log(d);
}

function getCurrentDate(){
  return new Date();
}
