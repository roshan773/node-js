const fs = require("fs")

// function writemessagetofile(message){
//     fs.writeFile("./file.txt", message ,(err) => {
//         if(err){
//             console.log(err)
//         }
//         else{
//             console.log("data Written successufully.....")
//         }
//     })
// }

// writemessagetofile("hii")

function writeMessagetoFile(message){
    fs.appendFile('./file.txt', `\n ${message}`, (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log("Data added successfully....")
        }
    })
}

writeMessagetoFile("bye")

