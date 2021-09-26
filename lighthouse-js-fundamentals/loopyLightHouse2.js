function loopyLighthouse(range, multiples, words) {
 var x = range [0];
 var y = range [1];
 var i = multiples [0];
 var j = multiples [1];
 var a = words [0];
 var b = words [1];
for (var x; x <= y; x++) {
if (x % i  === 0 && x % j !== 0) {
  console.log(a);
}
else if (x % i !== 0 && x % j === 0) {
  console.log(b);
}
else if (x % i === 0 && x % j === 0) {
  console.log(a + b);
}
else {
  console.log(x);
}
}
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);