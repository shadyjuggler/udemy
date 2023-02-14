// const snakeHead = document.getElementsByClassName("snakeHead");

const gameField = document.querySelector(".field"),
      startBtn = document.querySelector(".startBtn"),
      gameTimer = setInterval(gameTimerFunc, 300),
      food = document.createElement("div");

let directionY = 0,
    directionX = 0,
    currentX = 120,
    currentY = 120,
    foodCurrentX = 0,
    foodCurrentY = 0;

const snakeHead = document.createElement("div");

startBtn.addEventListener("click", () => {

    startBtn.style.display = "none";

    snakeHead.classList.add("snakeHead");
    gameField.append(snakeHead);
      
    // Makes food on field
    createFood()

    setDirection();
})


function gameTimerFunc() {
    
    // Snake movement
    snakeHead.style.top = `${currentY += directionY}px`;
    snakeHead.style.left = `${currentX += directionX}px`;
    
    

    //Check border crossing 
    borderCheck();
    
    // Check food crossing
    foodCrossing() ;

};


function setDirection() {
    document.addEventListener("keypress", (e) => {
        switch (e.code) {
            case "KeyW": directionY = -10;
                         directionX = 0;
                break;
            case "KeyS": directionY = 10;
                         directionX = 0;
                break;
            case "KeyA": directionX = -10; 
                         directionY = 0;
                break;
            case "KeyD": directionX = 10;
                         directionY = 0;
                break;
        }
    });
}

function borderCheck () {
    if (currentX == -10 || currentY == -10 || currentX == 250 || currentY == 250) {
        snakeHead.style.display = "none";
        gameOver();
    }
}

function createFood() {
    foodCurrentX = Math.floor((Math.random() * (250 + 1)) / 10) * 10;
    foodCurrentY = Math.floor((Math.random() * (250 + 1)) / 10) * 10;

    
    food.style.cssText = `
        position: relative;
        width: 10px;
        height: 10px;
        top: ${foodCurrentY}px;
        left: ${foodCurrentX}px;
        background-color: cyan;
        border-radius: 30%;
        border: 0.5px solid black;
    `;

    gameField.append(food);
    console.log("food " + foodCurrentX);
    console.log("food " + foodCurrentY);
};

function foodCrossing () {
    if (currentX === foodCurrentX + 10 && currentY === foodCurrentY + 10) {
        food.style.display = "none";
        console.log(currentX);
        console.log(currentY);
    }

    //nihera nerabotaet
}

function gameOver () {
    clearInterval(gameTimer);
}
