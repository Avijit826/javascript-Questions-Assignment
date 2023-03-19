const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  readline.question('Enter a month: ', val=>{
    if(val == 'January' || val == 'May' || val ==  'July' || val ==  'August' || val ==  'October' || val ==  'December')
        console.log(`Number of days in ${val} is: 31`)
    else if(val == 'February')
        console.log(`Number of days in ${val} is: 29`)
    else if(val == 'April' || val == 'June' || val == 'September' || val ==  'November')
        console.log(`Number of days in ${val} is: 30`)
    else
        console.log('Wrong Input')
    
    readline.close()
})