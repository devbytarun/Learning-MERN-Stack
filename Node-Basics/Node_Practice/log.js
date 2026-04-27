const fs = require('fs');
const path = require('path');

const logFilePath = path.join(__dirname, 'logs.txt');

function log(message) {
  console.log(message);

  const date = new Date().toISOString().split('T')[0];
  const formatted = `[${date}] ${message}\n`;

  fs.appendFile(logFilePath, formatted, (err) => {
    if (err) {
      console.log('Error writing log:', err);
    }
  });
}

module.exports = { log };
