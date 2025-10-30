type ip = string | number;
function greet(id: ip) {
  console.log(typeof id);
  console.log(typeof id == "string" ? id : id.toFixed(2));
}

greet(20.0000523);
