
fetch("currency.xml")
    .then(response => {
        response.text().then(xml => {
            let parser = new DOMParser(),
                xmlDOC = parser.parseFromString(xml, "application/xml");
                console.log(xmlDOC);
                currencies = xmlDOC.querySelectorAll("Currency"),
                output = {};

                currencies.forEach(item => {
                    output[`${item.children[0].textContent}`] = item.children[1].textContent
                })

                console.log(output);
        })
    })

    //               let parse = new DOMParser(),
    //               xmlDOM = parse.parseFromString(xml, "application/xml"),
    //               currencies = xmlDOM.querySelectorAll("Currency");
    //         let obj = {};

    //         currencies.forEach((item) => {
    //             let key = item.children[0].textContent,
    //             value = item.children[1].textContent;

    //             obj[`${key}`] = value;
    //         })

    //         console.log(obj)