// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//     - add 'Meat' in the beginning of your shopping cart if it has not been already added
//     - add Sugar at the end of you shopping cart if it has not been already added
//     - remove 'Honey' if you are allergic to honey
//     - modify Tea to 'Green Tea'

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

if(!shoppingCart.includes("Meat")){
  shoppingCart.unshift("Meat")
}
if(!shoppingCart.includes("Sugar")){
  shoppingCart.push("Sugar")
}
readline.question('Are you allergic to honey? \n yes/no :', val=>{
  if(val == 'yes'){
  shoppingCart.splice(shoppingCart.indexOf("Honey"),1)
}
  shoppingCart[shoppingCart.indexOf("Tea")] = "Green Tea"
console.log(shoppingCart)
 readline.close()
})
