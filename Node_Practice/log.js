const fs = require('fs');

function log(message){

console.log(message);

const date = new Date().toISOString().split("T")[0];

const formated = `[${date}} ${message}\n`;

  fs.appendFile("logs.txt", formated, (err) => {
    if (err) {
      console.log("Error writing log:", err);
    }
  });
}

module.exports = {log};