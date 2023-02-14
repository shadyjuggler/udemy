// Logichiskie operatori

const a = true,
      b = true;

const d = 1,
      f = 2;

if (a && b) {
    console.log("Verno");
}

console.log(a && b);

if (d && f) { // dinamicheskaja tipizacija, iz number to boolean
    console.log("true");
} else {
    console.log("false");
}

// V JS estj 5 sushnostej kotorie vsegda false eto: 0, "", null, NaN, undefined. Vse ostalnoe vsegda true

function check (statement) {
    if(statement) {
        return true;
    } else {
        return false
    }
};

console.log(check(0));
console.log(check(null));
console.log(check(""));
console.log(check(undefined));
console.log(check(NaN));

console.log(check(-0.001));

const e = null,
      g = 1;

console.log(e == null && g == 1); // true
console.log(undefined && "hello"); 
console.log(4 && 9); // 2

console.log( NaN || 2 || undefined ); // 2
console.log( NaN && 2 && undefined ); // NaN
console.log( 1 && 2 && 3 ); // 3
console.log( !1 && 2 || !3 ); // 3
console.log( 25 || null && !3 ); // 25
console.log( NaN || null || !3 || undefined || 5); // 5
console.log( NaN || null && !3 && undefined || 5); // 5
console.log( 5 === 5 && 3 > 1 || 5); // 5

let hamburger = 3;
let fries = 3;
let cola = 0;
let nuggets = 2;
            //0                        //2
if (hamburger === 3 && cola || fries === 3 && nuggets) {
   console.log('Done!')
}
console.log(hamburger === 3 && cola || fries === 3 && nuggets);
console.log(fries === 3 && nuggets); //2
console.log(fries === 3 && nuggets === 1); // false
console.log(fries === 3 || nuggets === 1); // true
console.log(fries || nuggets === 1); // 3
console.log(fries && nuggets === 1); // false
console.log(null && !3); // 3

if (null && !3) {
    console.log("Yes");
}

console.log(NaN || null || !3); // false

console.log(!2); // false
console.log( 5 === 5 && 3 < 1 || 5); // 5
console.log( true || 5); // 5

hamburger = undefined;
fries = NaN;
cola = 0;
nuggets = 2;
 
if (hamburger || cola || fries === 3 || nuggets) {
    console.log('Done!')
 }
 
console.log( fries === 3 && nuggets ||  hamburger && cola); // undefined   

const obj = {};
console.log(obj || null); // {}

const dog = {
    breed: 'Labradoodle'
  }
  
const name2 = dog && dog.name;
console.log(name2); // undefined

let val1;
const val2 = 2;
if (val1 && val2) {
  console.log('You made it into the if statement');
} else {
    console.log(val1 && val2); // undefined
}
