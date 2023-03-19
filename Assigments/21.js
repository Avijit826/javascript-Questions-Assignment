// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
//     - September, October or November, the season is Autumn.
//     - December, January or February, the season is Winter.
//     - March, April or May, the season is Spring
//     - June, July or August, the season is Summer

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  readline.question('Enter a month: ', val=>{
    if(val == 'September' || val == 'October' || val ==  'November')
        console.log('The season is Autumn.')
    else if(val == 'December' || val == 'January' || val == 'February')
        console.log('The season is Winter.')
    else if(val == 'March' || val == 'April' || val == 'May')
        console.log('The season is Spring.')
    else if(val == 'June' || val == 'July' || val == 'August')
        console.log('The season is Summer.')
    else
        console.log('Wrong Input')
    
    readline.close()
})