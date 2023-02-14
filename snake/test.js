// let x = Math.floor((Math.random() * (250 + 1)) / 10) * 10;

// console.log(x);

function duplicateCount(text){
    let times = [];
    let counter = 0;
    const arr = text.toLowerCase().split("");
    
    // arr.forEach(item => {
    //    times.push(arr.filter(l => (l === item)).length)
    // })

    for (let i = 0; i < arr.length; i++ ) {
        if (arr.includes(arr[i], i + 1)){
            counter++
        }
    }

    return counter
}

console.log(duplicateCount("Indivisibilities"))