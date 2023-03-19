//Write a code which can give grades to students according to theirs scores:
    // - 80-100, A
    // - 70-89, B
    // - 60-69, C
    // - 50-59, D
    // - 0-49, F

    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
      });
      readline.question('Enter a number: ', val=>{
        if(val<=100 && val>=80)
          console.log('Grade: A')
        else if(val<=89 && val>=70)
          console.log('Grade: B')
        else if(val<=69 && val>=60)
          console.log('Grade: C')
        else if(val<=59 && val>=50)
          console.log('Grade: D')
        else if(val<=49 && val>=0)
          console.log('Grade: F')
        else
          console.log('Wrong Number')
        readline.close()
    })