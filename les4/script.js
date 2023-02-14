//Create figure below, using loops

// *
// **
// ***
// ****
// *****
// ******

let star0 = "";
let star1 = "";
let star2 = "";

//1st version
for (let i = 0; i < 5 ; i++) {
    console.log(star0 += "*");
}

//2st version
while (star1.length < 6) {
    console.log(star1 += "*");
}

//3st version
do {
    console.log(star2 += "*");
} while (star2.length < 6)


//-------------------- tests

let num = 5;
    while (num <= 10) {
        console.log(num);
        num++;
    }

console.log("")

for (let i = 20; i > 10; i--){
    if (i === 13) break;
    console.log(i);   
}

console.log("")

for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}

console.log("")

let i = 2;
while (i <= 16) {
    if (i % 2 === 0) {
        i++
        continue;
    } else {
        console.log(i);
        i++
    }
}   

console.log("")

const arrayOfNumbers = [];

for (let i = 0; i <= 5; i++) {
    arrayOfNumbers[i] = i + 5;
}

console.log(arrayOfNumbers);

console.log("");

const arr = [3, 5, 8, 16, 20, 23, 50];
const result = [];

for (let i = 0; i < arr.length; i++) {
    result[i] = arr[i]
}
console.log(arr);
console.log(result);

console.log("");

const data = [5, 10, 'Shopping', 20, 'Homework'];

for (let i = 0; i < data.length; i++) {
    if (typeof(data[i]) === "string"){
        data[i] += " - done";
    } else {
        data[i] *= 2;
    }
}

console.log(data);

console.log("");

const data2 = [5, 10, 'Shopping', 20, 'Homework'];
const result2 = [];

for (let i = 1; i <= data2.length; i++) { // to ze samoe delaet reverse(),
    result2[i - 1] = data2[data2.length - i];
}


console.log(data2);
console.log(result2);

console.log("");

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Ebashit piramidu
const lines = 5;
let stars = "***********"; // was needed to 1ST CONSEPT see below 
let result3 = "";


// First version, best one, less code - more speed :)
for (let i = 0; i <= lines; i++) {
    // result3 += "     ".substring(0, lines - i) + `${stars.substring(0, 1 + 2 * i)}\n`;        1ST CONSEPT, without repeat(), 
    result3 += " ".repeat(lines - i) + `${"*".repeat(i * 2 + 1)}\n`;                             // using reapeat(), more effective, needs only pyramid's line amount
}


// Second version, more complex, using loop in loop contruction
for (let i = 0; i <= lines; i++) {
    result3 += " ".repeat(lines).substring(0, lines - i) 
    for (let j = 0; j <= i * 2; j++) {
        result3 +=  "*";
    }
    result3 += "\n"
}

console.log(result3);

