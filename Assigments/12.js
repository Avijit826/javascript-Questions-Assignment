const today= new Date();
// What is the year today?
console.log(today.getFullYear());

// What is the month today as a number?
console.log(today.getMonth());

// What is the date today?
console.log(today.getDate());

// What is the day today as a number?
console.log(today.getDay());

// What is the hours now?
console.log(today.getHours());

// What is the minutes now?
console.log(today.getMinutes());

// Find out the numbers of seconds elapsed from January 1, 1970 to now.
const past = new Date(01/01/1970);
console.log(`Total seconds: ${today-past}`);

