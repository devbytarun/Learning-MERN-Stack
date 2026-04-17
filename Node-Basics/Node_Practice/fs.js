// fs use karke ek "students.txt" file banao. Usme 3 student names appendFile
// se add karo (teen alag calls mein). Phir file padh ke print karo.
const fs = require("fs");
const path = require("path");

const studentsFilePath = path.join(__dirname, "students.txt");

fs.writeFile(studentsFilePath, "", (err) => {
  if (err) return console.log("Error:", err);

  
  fs.appendFile(studentsFilePath, "Tarun\n", (err) => {
    if (err) return console.log(err);

    fs.appendFile(studentsFilePath, "Rohit\n", (err) => {
      if (err) return console.log(err);

      fs.appendFile(studentsFilePath, "Aman\n", (err) => {
        if (err) return console.log(err);

        
        fs.readFile(studentsFilePath, "utf-8", (err, data) => {
          if (err) return console.log(err);

          console.log("File Content:\n" + data);
        });
      });
    });
  });
});
