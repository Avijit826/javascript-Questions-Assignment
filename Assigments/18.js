const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  readline.question('Enter your age: ', val=>{
    if (val >0 && val <18)
    console.log(`You have to wait for ${18 - val} years to turn 18`)
    else if (val >=18)
    console.log("You are old enough to drive")
    else
    console.log("Wrong Input")
    readline.close()
  })