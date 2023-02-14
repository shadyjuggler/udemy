const squares = document.getElementsByClassName("squares"),
      cirlce = document.querySelector(".circles");
      circles = document.querySelectorAll(".circles");

console.log(squares);
console.log(cirlce);
console.log(circles);

for (let s of squares) {
    s.style.backgroundColor = "blue";
}

circles.forEach(item => {
    item.style.cssText = `
        background-color: green;
        border-radius: 20%;
    `;
})

cirlce.style.backgroundColor = "yellow";