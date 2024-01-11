
const fs = require('fs');
// console.log(fs)

fs.readFile("text.txt", (error,data) => {
    if (error){
        console.log(error);
        return;
    }
    console.log(data.toString());
})
