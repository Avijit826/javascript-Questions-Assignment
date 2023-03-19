// Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  readline.question('Enter a number: ', val=>{
    if(val % 2 == 0)
      console.log("The number is even.")
  else
      console.log("The number is odd.")
    
    readline.close()
})