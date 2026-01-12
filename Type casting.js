let x = 100;
console.log("line 59:", typeof x);

x = String(x);
console.log("line 63:", typeof x);

let str = "200";
str = Number(str);
console.log("line 67:", typeof str);

let str2 = "WAHID";
str2 = Number(str2);
console.log(str2);

console.log(typeof "1");
console.log(typeof "1" == "number");
console.log(typeof "");
console.log(typeof NaN);
console.log(typeof null);
console.log(typeof undefined);

console.log(typeof true);
console.log(typeof false);

console.log(Number(true));
console.log(Number(false));

console.log(String(true));
console.log(String(false));

console.log({} == null);
console.log({} == true);
