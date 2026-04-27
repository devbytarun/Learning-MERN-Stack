//  process.argv use karke ek program banao jo 2 numbers command line se le aur
// unka sum print kare.Example: node app.js 5 10 → Sum: 15

const num1 =  Number(process.argv[2]);
const num2 =  Number(process.argv[3]);

console.log("Sum:",num1 + num2);