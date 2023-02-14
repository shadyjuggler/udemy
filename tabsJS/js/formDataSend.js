document.addEventListener("DOMContentLoaded", () => {

    const forms = document.querySelectorAll("form");   
    
    console.log(forms);
    

    forms.forEach(item => {
        postData(item);
    })

    function postData (form) {

        form.addEventListener("submit", (e) => {
            e.preventDefalut();
            console.log("hello");

            const r = new XMLHttpRequest();
            r.open("POST", "server.php")
            // r.setRequestHeader("Content-type", 'mulitpart/form-data')

            const formData = new FormData(form);

            r.send(formData)

            r.addEventListener("load", () => {

                if (r.status === 200) {
                    console.log(r.response);
                }

            })


        })

        

    }

})