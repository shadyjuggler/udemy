// Recursion

//factorial calculation

let n = 6;

function factorialCalc (n) {

    let fact = 1;

    for (let i = 1; i <= n; i++) {
        fact *= i;
    }

    return fact
}

console.log(factorialCalc(n));

let arr = [];

if (arr) {
    console.log("true");
}

let str = "andvan andvan andvan";
let arr1 = ["aijvjaof", "jfvak", "vniqrvnrqkorv"]



// console.log("qjbiofv".length);


// function longestString(...strs) {
//     return strs.reduce((c, v) => c.length > v.length ? c : v);
//   }
// console.log(str.split(" ").map(i => i.length).reduce((a, c) => a > c ? a : c));


// function findShort(s){
//     return s.split(" ").map(i => i.length).reduce((a, c) => a > c ? c : a)
// }

// console.log(findShort("bitcoin take over the world maybe who knows perhaps"));

function findShort(s){
    return Math.min(...s.split(" ").map (s => s.length));
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));

let str1 = "bitcoin take over the world maybe who knows perhaps";

let obj = [
    {age: 101}, 
    {age: 313},
    {age: 1313},
    
]

console.log(obj.map(e => e.age));

// factorial using recursion


function findFactorial (n) {
    if (n < 1) return 0
    if (n === 1) {
        return 1;
    } else {
        return n * findFactorial(n - 1)
    }
}


function factorial(n) {
    return (n === 1) ? 1 : n * factorial(n - 1);
 }
 



console.log(factorial(5));


//------------------------------------------

function minMax(arr){
  let max = arr.reduce((a, c) => a > c ? a : c);
  let min = arr.reduce((a, c) => a < c ? a : c);
  console.log(max);
  return [min, max]
}

console.log(minMax([1, 2, 3, 4, 5]));

//-------------------------------------------------


const rps = (p1, p2) => {
    if (((p1 === "rock") && (p2 === "scissors")) || p1 === "scissors" && p2 === "paper" || p1 === "paper" && p2 === "rock") {
      return "Player 1 won!";
    } else if (p1 === p2) {
      return "Draw!";
    } else {
      return "Player 2 won!";
    }

};

console.log("s"*2);

let sum = 0;
[].forEach(item => {
    sum += item;
})
console.log([].reduce((a, c) => {
    a + c
}, 0))


function rowSumOddNumbers(n) {
    let k = elementsAmount(n) * 2;
    let sum = 0;

    while (k >= (k - n * 2)) {
        k--;
        if (k % 2 === 1) {
            sum += k;
        }
        
    }
    console.log(`${k} ${k - n * 2}`);

    // do {
    //     if (k % 2 === 1) {
    //         sum += k;
    //     }
    //     k--;
    // } while (k >= k - n * 2)

    return sum
}

function elementsAmount(n) {
    if (n === 1) {
        return 1
    } else {
        return n + elementsAmount(n - 1);
    }
}

console.log(elementsAmount(5));
console.log(rowSumOddNumbers(5));