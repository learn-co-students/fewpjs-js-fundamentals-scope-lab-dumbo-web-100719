let animal = "dog"

function myAnimal() {
  return animal
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  const animal = 'cat'
  // P.S.: You can't just hard-code 'cat' below
  return animal
}
let n = 2
function add2(n) {
  
  // Feel free to move things around!
  const two = 2
  return n + two
}