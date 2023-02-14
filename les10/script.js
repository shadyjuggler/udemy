const inputEur = document.querySelector("#eur"),
      inputUsd = document.querySelector("#usd");

inputEur.addEventListener("input", () => {

    const request = new XMLHttpRequest();

    request.open("GET", "data.json");
    request.setRequestHeader("Content-type", "application/json");
    request.send();

    request.addEventListener("load", () => {

        if (request.status === 200) {
            
            const obj = JSON.parse(request.response);


            if (inputEur.value) {

                console.log(obj.currency.usd)
                inputUsd.value = (Number(inputEur.value) / Number(obj.currency.usd)).toFixed(2);

            } else {

                inputUsd.value = "";
            }

        } else if (request.status === 404) {

            inputUsd.value = "Not found"

        }

    })

    

})