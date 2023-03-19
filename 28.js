let isPrime = true;
 
console.log("Prime numbers from 0 to 100 are: ");
 
for(let i=2; i <= 100; i++){
  for(let j=2; j < i - 1; j++){
    if(i % j == 0){
      isPrime = false;
      break;
    }
  }
  
  if(isPrime ){
    console.log(i);
  }
  isPrime = true;
}
