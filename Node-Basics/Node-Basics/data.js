const fs = require('fs');

fs.writeFile('data.txt', 'Hello Tarun! Learning Node.js 🚀', (err) => {
    if (err) return console.log("Write Error:", err);

    console.log("File created & data written ✅");


    fs.readFile('data.txt', 'utf8', (err, data) => {
        if (err) return console.log("Read Error:", err);

        console.log("File Content:", data);

   
        fs.unlink('data.txt', (err) => {
            if (err) return console.log("Delete Error:", err);

            console.log("File deleted 🗑️");

            
            fs.access('data.txt', fs.constants.F_OK, (err) => {
                if (err) {
                    console.log("✅ File does NOT exist anymore");
                } else {
                    console.log("❌ File still exists");
                }
            });

        });

    });

});