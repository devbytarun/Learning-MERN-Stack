// fs use karke ek "students.txt" file banao. Usme 3 student names appendFile
// se add karo (teen alag calls mein). Phir file padh ke print karo.
const fs = require("fs");


fs.writeFile("students.txt", "", (err) => {
  if (err) return console.log("Error:", err);

  
  fs.appendFile("students.txt", "Tarun\n", (err) => {
    if (err) return console.log(err);

    fs.appendFile("students.txt", "Rohit\n", (err) => {
      if (err) return console.log(err);

      fs.appendFile("students.txt", "Aman\n", (err) => {
        if (err) return console.log(err);

        
        fs.readFile("students.txt", "utf-8", (err, data) => {
          if (err) return console.log(err);

          console.log("File Content:\n" + data);
        });
      });
    });
  });
});