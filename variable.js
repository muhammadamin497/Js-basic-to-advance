"use strict";

const pi = 3.14;

let a = 10;
function show() {
  console.log(a);
  let b = 20;
  console.log(b);
}
show();
console.log(a);

function test() {
  let c = 30;
  console.log(c);
}
test();

if (true) {
  let d = 40;
  console.log(d);
}

var d = 50;
console.log(d);
var d = 60;
console.log(d);

let e = 70;
// let e = 80; // یہ خطا دے گا

let f = 90;
if (true) {
  let f = 100;
  console.log(f);
}
console.log(f);

let amount = 110;
if (true) {
  let amount = 120;
  console.log(amount);
}
console.log(amount);

console.log(1 === "1");
console.log(1 == "1");