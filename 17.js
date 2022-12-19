// Create a human readable time format using the Date time object
// - YYYY-MM-DD HH:mm
// - DD-MM-YYYY HH:mm
// - DD/MM/YYYY HH:mm

let date = new Date();

let padDigits = (num) =>{
    return num.toString().padStart(2,'0')
}

let year = date.getFullYear()
let month = padDigits(date.getMonth() + 1)
let day = padDigits(date.getDate())

let timeForamt = () => {
    return (
        [
            padDigits(date.getHours()),
            padDigits(date.getMinutes()),
        ].join(':')
    )
}

let firstFormat = () => {
    return (
        [
            year,month,day
        ].join('-') + ' ' + timeForamt()
    )
}
let secondFormat = () => {
    return (
        [
            day,month,year
        ].join('-') + ' ' + timeForamt()
    )
}
let thirdFormat = () => {
    return (
        [
            day,month,year
        ].join('/') + ' ' + timeForamt()
    )
}
console.log(firstFormat())
console.log(secondFormat())
console.log(thirdFormat())