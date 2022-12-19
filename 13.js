// Run this node enviroment only

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

let base, height;
readline.question('Enter the base: ', val=> {
    base = val;
    readline.question('Enter the height: ', val=> {
        height = val; 
        console.log(`Area of triangle is: ${0.5 * base * height}`);
        readline.close();
      }); 
  });
  
