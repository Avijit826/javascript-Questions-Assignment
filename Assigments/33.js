const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

function BMI (weight, height){
  return weight/(height * height)
}
readline.question('Enter weight in KG: ', (weight)=> {
    readline.question('Enter height in meter: ', (height)=> {
       let bmi = BMI(weight,height)
      if(bmi<18.5)
        console.log('Underweight')
    else if(bmi<= 24.9 && bmi>= 18.5)
        console.log('Normal weight')
    else if(bmi<= 29.9 && bmi>= 25)
        console.log('Overweight')
    else if(bmi>= 30)
        console.log('Obese')
    else
        console.log('Wrong Input')
        readline.close();
      }); 
  });
  