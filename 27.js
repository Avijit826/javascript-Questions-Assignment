ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages.sort()
const len = ages.length
const mid = Math.floor(len / 2)

console.log(`Min value: ${ages[0]}`)
console.log(`Max value: ${ages[len-1]}`)

if (len % 2 !== 0)
  console.log(`Median value: ${ages[mid]}`)
else
  console.log(`Median value: ${ages[mid - 1] + ages[mid] / 2}`)

const sum = ages.reduce((total, ele) => total + ele)

console.log(`Avg value: ${sum/len}`)

function diff(a, b) {
  return Math.abs(a - b);
}

console.log(`The value of (min - average): ${diff(ages[0],(sum/len))}`)
console.log(`The value of (max - average): ${diff(ages[len-1],(sum/len))}`)