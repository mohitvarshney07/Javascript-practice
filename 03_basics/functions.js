//function declaration
function first(){
    console.log('M')
    console.log('O')
    console.log('H')
    console.log('I')
    console.log('T')
}

// first()

//function to add two numbers

//FIRST WAY
// function sum(num1,num2){
//         console.log(num1+num2)
// }


//SECOND WAY
// function sum(num1,num2){
//     let result = num1 + num2
//     return result
// }
// const add = sum(3,5) 
// console.log(add)



//THIRD WAY
// function sum(num1,num2){
//     return num1 + num2
// }
// const add = sum(5,7)
// console.log(add)

// function  loginuserMessage(username){
//     if(!username){
//         console.log('enter user name')
//     }else{
//     return `${username} just loged in`
// }
// }
//  const message = loginuserMessage()
// console.log(message)
// console.log(loginuserMessage("mohit"))


//rest operator in functions
// function calculatecartPrice(...num){       //... is known as both rest and spread operator
//     return num
// }
// console.log(calculatecartPrice(100,200,300,400))


//Objects in functions
// const user ={
//     username : 'mohit',
//     price : 2000
// }
// function handleobj(object){
//     console.log(`User name is ${object.username} and price is ${object.price}`)
// }
// handleobj(user)


// Arrays in functions
const arr = [100,200,400,'mohit','ankit']
function elementofArray(array){
    console.log(array[3])
}
elementofArray(arr)

