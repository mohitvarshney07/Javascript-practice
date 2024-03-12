let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleString())
// console.log(typeof myDate)


let mycreateddate = new Date(2024,2,4)
console.log(mycreateddate.toLocaleString())

let mytimestamp = Date.now()
console.log(mytimestamp)
console.log(mycreateddate.getTime())

console.log(Date.now())
console.log(Date.now()/1000) //to convert date millisecond into seconds
console.log(Math.floor(Date.now()/1000))