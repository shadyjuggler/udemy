// Advanced task with objects

const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5  // 250
        },
        {
            width: 15,
            length: 7 //525
        },
        {
            width: 20,
            length: 5 // 500
        },
        {
            width: 8,
            length: 10 // 400
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50250
}

function isBudgetEnough(data) {
    let totalVolume = 0;


    data.shops.forEach(item => {
        totalVolume += (item.width * item.length) * data.height;
    })

    if (totalVolume * data.moneyPer1m3 <= data.budget)
        return 'Бюджета достаточно'
    else 
        return 'Бюджета недостаточно'

};

console.log(isBudgetEnough(shoppingMallData));

//------------------------------------------------------------------

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', "ajdl", "rjqi0r"];

function sortStudentsByGroups(arr) {
    let output = [], team = [] , reamained = [];

    arr.sort();

    for (let i = 0; i < arr.length; i++) {

        if (team.length < 3) 
            team.push(arr[i]);

        if (team.length === 3) {
            output.push(team);
            team = [];
        }
        if (i > 8) 
            reamained.push(arr[i]);
    }

    if (arr.length > 9) {
        output.push(`Оставшиеся студенты: ` + reamained.join(", "));
    } else {
        output.push(`Оставшиеся студенты: -`);
    }

    return output;
}

console.log(sortStudentsByGroups(students));

//---------------------------------------------------------------

const restorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '14$'
        },
        {
            name: 'Pizza Diavola',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [
        {name: 'Alice', age: 22}, {name: 'John', age: 24}
    ],
    averageLunchPrice: '20$',
    openNow: true
};

function isOpen(prop) {
    let answer = '';
    prop ? answer = 'Открыто' : answer = 'Закрыто';

    return answer;
}

console.log(isOpen(restorantData.openNow))

function isAverageLunchPriceTrue(fDish, sDish, average) {
    if (+fDish.price.slice(0, -1) + (+sDish.price.slice(0, -1)) > (+average.slice(0, -1))) {
        return 'Цена выше средней';
    } else {
        return 'Цена ниже средней';
    }
}

console.log(isAverageLunchPriceTrue(restorantData.menu[1], restorantData.menu[3], restorantData.averageLunchPrice));

function transferWaitors(data) {
    const copy = JSON.parse(JSON.stringify(data))
    copy.waitors[0] = {name: 'Mike', age: 32};
    return copy;
}

console.log(restorantData);
console.log(transferWaitors(restorantData));


let obj = {
    name: "alex",
    age: 19,
    adress: {
        street: "lauva iela 1",
        city: "Riga"
    },
    married: false,
    sayHello : () => console.log("hello")
}


// let cloneObj = {...obj}; // shallow copy
let cloneObj = JSON.parse(JSON.stringify(obj)); // makes deep copy, but objects and function replaces with undefined and null

cloneObj.age = 20;
cloneObj.adress.city = "Rezekne"

console.log(obj);
console.log(cloneObj);
console.log(obj.sayHello());
