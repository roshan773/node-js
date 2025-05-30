const fs = require("fs")

let productdata = {
    id: Math.random().toString(36).substr(2,9),
    title: "title 2",
    price: 200,
}


function Adddata(){
    fs.readFile("./db.json", "utf-8", (err, data) => {
        if (err) {
            console.log(err)
        } else {
            const parseData = JSON.parse(data)
            parseData.push(productdata)

            fs.writeFile("./db.json", JSON.stringify(parseData), (err) => {
                if (err) {
                    console.log(err)
                } else {
                    console.log("Data Written Successfully......")                    
                }
            })
        }
    })
}

Adddata()