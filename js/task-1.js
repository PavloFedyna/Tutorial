// const start = 8
// const end = 17
// const divisor = 3
// let resault

// for (let i = start; i <= end; i++) {
//   // console.log (i)
//   if (i % divisor === 0) {
//     resault = i
//     break
//   }
// }
// console.log(resault)

function findNumber(start, end, divisor) {
  let resault
  for (let i = start; i <= end; i++){
    if (i % divisor === 0) {
      resault = i
      return resault
    }
  }
}
console.log(findNumber(8, 17, 3))

