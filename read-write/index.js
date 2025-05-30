const fs = require("fs")

function writeMessagetofile(message){
    fs.appendFile("./file.txt", `\n ${message}`, (err) => {
        if (err) {
            console.log(err)
        } else {
           console.log("data written successfully.....") 
        }
    })
}

writeMessagetofile("BYE")