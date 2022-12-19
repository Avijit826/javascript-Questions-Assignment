let myArrey = [11,13,'LCO',true,"ineuron",false];
let myNewArray = [];
for(let e of myArrey){
    if (typeof(e) === 'string')
    myNewArray.push(e);
}
console.log(myNewArray);