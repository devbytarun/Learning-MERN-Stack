//  process.argv use karke ek program banao jo 2 numbers command line se le aur
// unka sum print kare.Example: node app.js 5 10 → Sum: 15

const num1 = Number(process.argv[2]);
const num2 = Number(process.argv[3]);

if (Number.isNaN(num1) || Number.isNaN(num2)) {
  console.log('Usage: node app.js <num1> <num2>');
  process.exit(1);
}

console.log('Sum:', num1 + num2);
