getFibonacciSequence = n => {
    let sequence = [];
    if (typeof(n) === "number" && n >= 0) {

        for (let i = 0; i <= n; i++) {
            (i === 0 || i === 1) ? sequence[i] = i : sequence[i] = sequence[i - 1] + sequence[i - 2];
        }
        
        return sequence;
    } else {
        console.log("Parameter is not an integer!");
    }
}

console.log(getFibonacciSequence(12));

//--------------------------------------------------------


// Check if entered param is a number power of 2
checkPowerOf2 = p => {
    if (typeof(p) === "number" && p >= 0) {

        // for (p; p > 0; p /= 2) {
        //     if (p === 2) return "yes";
        //     else if ( p < 2) return "no";
        // };

        while (p > 0) {
            if (p === 2) return "yes";
            else if ( p < 2) return "no";
            p /= 2;
        }

    } else {
        console.log("Parameter is not an number!");
    }
}
console.log(checkPowerOf2(64));

//-------------------------------------------------------------

//Calculate cube volume

function calculateVolumeAndArea(a) {
    if (Number.isInteger(a) && a > 0) {
        return `Объем куба: ${a * a * a}, площадь всей поверхности: ${(a * a) * 6}`;
    } else {
        return "При вычислении произошла ошибка";
    }
}

console.log(calculateVolumeAndArea(5));

//------------------------------------------------------------------------

//Find room by place, hujna koroche
                        //2
function getCoupeNumber(place) {
    if (Number.isInteger(place) && place <= 36 && place > 0) {
        return 9 - parseInt((36 - place) / 4)
    } else if (place > 36 || place === 0) {  
        return "Таких мест в вагоне не существует";
    } else {
        return "Ошибка. Проверьте правильность введенного номера места" ;
    }
}

console.log(getCoupeNumber(15));

console.log(9 - parseInt((36 - 15) / 4));

//--------------------------------------------------------

// ParseMinutesToNormalTime 

function getTimeFromMinutes(minutes) {
    if (!Number.isInteger(minutes) || minutes < 0) 
        return "Ошибка, проверьте данные";
        
    const hours = parseInt(minutes / 60),
          min = minutes % 60;
    let ending;
    const lastDigit = hours % 10;

    switch (lastDigit) {
        case 1: ending = "";
            break;
        case 2: case 3: case 4: ending = "a";
            break;
        default: ending = "ов";
            break;
    }
    return `Это ${hours} час${ending} и ${min} минут`;
}

console.log(getTimeFromMinutes(245));

//----------------------------------------------------------------

//Return maxNum 

function findMaxNumber(a, b, c, d) {

    if (typeof(a) !== 'number' ||
        typeof(b) !== 'number' ||
        typeof(c) !== 'number' ||
        typeof(d) !== 'number') {
        return 0;
    } else {
        return Math.max(a, b ,c, d);
    }
}

console.log(findMaxNumber(2, 3.3, 2, 9));


