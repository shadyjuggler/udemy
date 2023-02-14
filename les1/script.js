
let a = 15;
console.log(`qinboqne${a}`);

let arr = [1,2,3]; // Array
// let obj = { // Object
//     a: 1,
//     b: 2
// }
const obj = {
    "Anna" : 100,
    "Alice" : 150,
    "products" : {
        
    }
};

const students = {
	"name" : ["Sanja", "Danja", "Natan"],
	"age" : [19, 20, 19],
	group : "4202BDA", 
    "4" : 12
};


                            //Svojstvo objekta mozno i cherz tochku ukazatj, no mozet bitj problema 
                            //esli kluchem budet chiso, togda tolko v [] skobkah.
                            //console.log(students["4"]);
                            //voobshe luche vsego vsegda stavij []
for (let i = 0; i < students.name.length; i++) {
	console.log(`Student from ${students["group"]} group, ${students["name"][i]} is ${students["age"][i]} years old.`);
}
