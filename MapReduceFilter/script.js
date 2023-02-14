let arr = [
    {id: 1, name: "Jhon"},
    {id: 2, name: "Lisa"},
    {id: 3, name: "Max"}
]

console.log(arr.map(item => item.id));

//--------------------------------------------------

var pilots = [
    {
      id: 10,
      name: "Poe Dameron",
      years: 0,
    },
    {
      id: 2,
      name: "Temmin 'Snap' Wexley",
      years: 0,
    },
    {
      id: 41,
      name: "Tallissan Lintra",
      years: 1,
    },
    {
      id: 99,
      name: "Ello Asty",
      years: 0,
    }
  ];

var mostExpPilot = pilots.reduce((oldest, pilot) => oldest.years > pilot.years ? oldest : pilot, {});

console.log(mostExpPilot);

//-----------------------------------------------------------------------


function sumTwoSmallestNumbers(numbers) {  
    return numbers.sort((a,b) => a - b).splice(0, 2).reduce((a, c) => a + c);
}

console.log(sumTwoSmallestNumbers([23, 71, 33, 82, 1]));

