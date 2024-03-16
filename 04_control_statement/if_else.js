//conditional statements
// if
// syntax :
// if(condition){

// }

// for comparison we have operators :
// <,>,<=,>=,!=,==,===,!==


//example
// let temp = 44
// if(temp < 50){
//     console.log("temperature is less than 50")
// }
// else{
//     console.log("temperature is greater than 50")
// }

//example 2 with scope understanding
// let score = 100
// if(score >50){
//     const power = 'fly'
//     console.log(`power is : ${power}`)  // it will not give any error
// }
// console.log(`power is : ${power}`)    // it will give error power undefined as its scopw is only within the curly braces

// example 3
// let balance = 1000
// if(balance < 500){
//     console.log("less than 500")
// }
// else if(balance < 750){
//     console.log("less than 750")
// }
// else if(balance < 900){
//     console.log("less than 900")
// }
// else{
//     console.log("less than 1200")
// }

// example 4
let userlogin = false
let debitcard  = true
const loginfromgoogle = false
const loginfromemail = true
if(userlogin && debitcard){
    console.log("logged in and allowed to buy things")
}
if(loginfromgoogle || loginfromemail){
    console.log("user logged in")
}