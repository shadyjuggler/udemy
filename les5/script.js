//functions

function getMathResult(a, b) {
    if (b > 0 && typeof(b) === "number") {
        let result = `${a}`
        for (let i = 1; i <= b; i++) {
            result += `---${a * (i + 1)}`;
        }
        return result;
    } else {
        return a;
    }
}

console.log(getMathResult(2, 5));

function sayHello(name) {
    return `Привет,${name}`;
}

console.log(sayHello("Anton"));