const obj = {
    font: 24,
    background: "url",
    color: {
        border: "black",
        borderRadius: 0.5
    },
    width: 100
}

for (let key in obj) {
    if (typeof(obj[key]) === "object") {
        for (let i in obj[key]) {
            console.log(`The ${key} object, property ${i} has value : ${obj[key][i]}`);
        }
    } else {
        console.log(`The object ${key} has value: ${obj[key]}`);
    }
}

console.log(Object.keys(obj.color).length); 


let arr = [1,2,4,5,6,7,];

arr.forEach((item, i, arr) => {
    item *= 2;
});

console.log(arr);

//------------------------------------------------------------------

//Task

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: "10%",
            php: "15%",
            html: "100%"
        },
        exp: '1 month'
    }
};

function showExperience(plan) {
    return plan.skills["exp"];
}

function showProgrammingLangs(plan) {
    const languages = plan.skills.programmingLangs;
    let outputStr = "";

    if(Object.keys(languages).length === 0) // Check if obj is empty
        return 0;
    
        
    for (let key in languages) {
        outputStr += `Язык ${key} изучен на ${languages[key]}\n`;
        // if (languages[key]) {
        //     outputStr += `Язык js изучен на ${languages[key]}\n`;
        // } else return "";
    }

    return outputStr;
}



personalPlanPeter.showAgeAndLangs = function (plan) {
    const age = plan.age;
    let outputStr = `Мне ${age} и я владею языками: `;

    plan.skills.languages.forEach((item, i, arr) => {
        outputStr += `${arr[i].toUpperCase()} `
    });

    return outputStr;
}

console.log(showExperience(personalPlanPeter));
console.log(showProgrammingLangs(personalPlanPeter));

console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

//----------------------------------------------------------------------

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    if (arr.length === 0 ) return 'Семья пуста';
    return `Семья состоит из: ${arr.join(" ")}`;
}

console.log(showFamily(family));



const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    arr.forEach(item => {
        console.log(item.toLowerCase());
    })
}

console.log(standardizeStrings(favoriteCities));

//--------------------------------------------------------------------------

const someString = 'This is some strange string';

function reverse(str) {
    if (typeof(str) !== "string") return "Ошибка!";
    return str.split("").reverse().join("");
}

console.log(reverse(someString));

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];


function availableCurr(arr, missingCurr) {
    
    if (arr.length === 0) return 'Нет доступных валют'
    
    let outputStr = "Доступные валюты:\n";

    arr.forEach(item => {
        if (item !== missingCurr) {
            outputStr += `${item}\n`;
        }
    });

    return outputStr;
}

console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], "CNY"));