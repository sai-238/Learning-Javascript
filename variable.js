var x = [4, 5, 6];
var y = 6;
var z = 0;

for (var index in x) {
  z += x[index];
}
z += y;

console.log(z);