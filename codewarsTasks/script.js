function makeNegative(num) {
    if (num > 0) 
        num = Number("-" + num);
    return num;
}

console.log(makeNegative(0.12));
console.log(2);

const num = 5;

console.log(true);

//-----------------------------------------------------------------

function betterThanAverage(classPoints, yourPoints) {
    let sum = 0;
    classPoints.forEach(mark => {
        sum += mark;
    });
    
    let arr = [];

    const average = sum / classPoints.length;

    return yourPoints > average;
  
}

console.log(betterThanAverage([1,2,3,4,5,6,7], 4));

let arr = [1,2,3,4,5,6,7,8,9,10];



console.log(arr.reduce((accumulator, currentValue) => {
    return accumulator += currentValue;
}, 0));

function basicOp(operation, value1, value2)
{
    return eval(`${value1}${operation}${value2}`);
}


let num1 = 3;
let oper = "+"
let num2 = 2;
let str = `2 ${oper} 2`;
console.log(eval(`${num1} ${oper} ${num2}`));
console.log(basicOp("*", 2, 5));

//----------------------------------------------------------

function digitize(n) {
    return `${n}`.split("").reverse().map(i => +i);
  }

console.log(digitize(54321));

//------------------------------------------------------------

function check(a, x) {
    for (let item of a) {
        if (item === x) return true;
    }
    return false
}

console.log(check([101, 66], 66));


//-------------------------------------------------------------

function getCount(str) {
    let counter = 0;

    ["a", "e", "i", "o", "u"].forEach(vowel => {
        [...str].forEach(item => {
            if (vowel === item) counter += 1;
        });
    });


    return counter
}

console.log(getCount("abracadabra"));



//-------------------------------------------------------------

//return the total number of smiling faces in the array
function countSmileys(arr) {

    const eyes = [':' , ';'],
          noses = ['-', '~'],
          mouths = [')', 'D'];
    
    let counter = 0;

    // for (let smile of arr) {

    //     if (smile.length === 3) {
    //         if (eyes.includes(smile.split("")[0]) && (noses.includes(smile.split("")[1]) && mouths.includes(smile.split("")[2]))) {
    //             counter++;
    //         }
    //     } else {
    //         if (eyes.includes(smile.split("")[0]) && mouths.includes(smile.split("")[1])) {
    //             counter++;
    //         }
    //     }
       
    // };

    return arr.reduce((a, c) => {

            if (c.length === 3) {
                if (eyes.includes(c.split("")[0]) && (noses.includes(c.split("")[1]) && mouths.includes(c.split("")[2]))) {
                    a++;
                }
            } else {
                if (eyes.includes(c.split("")[0]) && mouths.includes(c.split("")[1])) {
                    a++;
                }
            }
           
        
    }, 0);

    // return counter;

}


console.log(countSmileys([':)',':(',':D',':O',':;']));

//-------------------------------------------------------------

var uniqueInOrder=function(iterable){
  
    let arr = iterable.split("");
    let unique = arr[0];
    let res = [];

  //   if (arr.lenght === 1) return [iterable]

    arr.forEach((item, i) => {
        if (i === 0) {
            res.push(unique);
        } else {
            if (unique !== item) {
                res.push(item);
                unique = item;
            }
        }

    })
        
    return res
        
   

}


console.log(uniqueInOrder('AAAABBBCCDAABBB'));