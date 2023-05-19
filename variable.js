var x = [4, 5, 6];
var y = 6;
var z = 0;

for (var index in x) {
  z += x[index];
}
z += y;
const p1 = 1258
const p2 = 1500
let avg = p1 + p2 / 2

console.log(z);
console.log(avg);
let tot = avg * z
console.log(tot); 