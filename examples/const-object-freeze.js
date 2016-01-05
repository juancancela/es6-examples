// Defining a const computer object, it wont be possible to add new keys to
// computer object.
const computer = {
  brand: "Apple",
  model: "II"
}

// valid!
computer.brand = "Microsoft";

// throw error
computer.price = "1564";
