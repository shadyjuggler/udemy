document.addEventListener("DOMContentLoaded", () => {

    const btns = [...document.querySelectorAll("[data-modal]")],
          modal = document.querySelector(".modal"),
          closeBtn = modal.querySelector(".modal__close"),
          form = modal.querySelector("form"),
          inputs = [...modal.querySelectorAll("input")];
        //   modalTimer = setTimeout(modalAppears, 10000);

    

    btns.map(btn => btn.addEventListener("click", e => {
        const target = e.target;

        if(target && target.tagName === "BUTTON") {
            modalAppears()
        }

    }))
    
    modal.addEventListener("click", e => {

        const target = e.target;

        if (target == closeBtn || target === modal) {
            modalHides()
        }

    })

    form.addEventListener("submit", e => {
        e.preventDefault()

        inputs.forEach(input => input.value = "")

        console.log("data saved");

        modalHides()
    })

    function modalAppears () {
        modal.classList.add("show")
        modal.classList.remove("hide");
        clearInterval(modalTimer)
    }

    function modalHides () {
        modal.classList.add("hide")
        modal.classList.remove("show");
    }
})