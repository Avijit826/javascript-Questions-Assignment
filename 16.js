let r;
const pi= 3.14;

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

readline.question('Enter the radius: ', val=> {
    r = val; 
    let area = pi * r * r;
    let c = 2 * pi * r;
    console.log(`Area of circle is: ${area} and circumference of a circle is: ${c}`);
    readline.close();
  });