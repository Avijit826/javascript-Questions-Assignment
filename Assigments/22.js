// Write a program which tells the number of days in a month.
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

const getDays = (year, month) => {
    return new Date(year, month, 0).getDate();
};

// console.log(getDays(2024, 2))
readline.question('Enter the year: ', (year)=> {
    readline.question('Enter the month number: ', (month)=> {
        console.log(`Number of days: ${getDays(year, month)}`);
        readline.close();
      }); 
  });
  