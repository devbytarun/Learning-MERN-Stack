const fs = require('fs')

fs.writeFile('info.txt',  'Mera naam Tarun hai', (err)=>{
    if (err) {
        console.log("Error:", err);
    } else{
        console.log("File baan gyi !! ");
    }
})


fs.appendFile('log.txt', 'hello world', (err)=>{
       if (err) {
        console.log("Error:", err);
    } else{
        console.log("Line Added !! ");
    }
})


fs.appendFile('log.txt', 'My Self tarun', (err)=>{
       if (err) {
        console.log("Error:", err);
    } else{
        console.log("Line Added !! ");
    }
})


fs.appendFile('log.txt', 'welcome !!', (err)=>{
       if (err) {
        console.log("Error:", err);
    } else{
        console.log("Line Added !! ");
    }
})