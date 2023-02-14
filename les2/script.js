'use strict'
//Basic communication with user

//alert("If you close this tab, data won't save"); // vivodit opoveshenie

// const trueOrFalse = confirm(message); // sohranit v peremennoj true ili false
// console.log(trueOrFalse); 

// const result = prompt("How old are you?", "age"); // zapishet luboju stroku v peremennuju, vtoroj argument eto placeholder
// console.log(typeof(result));
// console.log(result * 2); // budet NaN, t.k. promt vozvrashaet string, mozno dopistaj +prompt togda budet vozvrashatj number

// const age = +prompt("How old are you?", "age");
// console.log(age - 1.4);

// const answers = [];

// answers[0] = prompt("What is your name");
// answers[1] = prompt("What is your surname");
// answers[2] = prompt("What is your age");

// console.log(window.screenLeft);

//iz vseh operatovor otdelno rabotaet +, s nim mozno skladivatj stroki, eto nazivaetsa konkatinacija
console.log("5" + 2); // "52"
console.log(+"5" + 2); // 7 perivij plus : unarnij plus, on iz stroki delaet number
console.log(+"number" + 2); // NaN 

let incr = 10
console.log(incr++);
console.log(incr);
console.log(2 % 5);// 2