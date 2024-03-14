// const user = {
//     username : "mohit",
//     price : 2000,
//     firstmessage : function(){
//         console.log(`Welcome to the website , ${this.username}`)
//         console.log(this)
//     }
// }
// user.firstmessage()
// user.username = "varshney"
// user.firstmessage()
// console.log(this)


// function chai(){
//     let username = "Mohit"
//     console.log(this.username)
// }
// chai()

// const chai = function(){
//         let username = "Mohit"
//         console.log(this.username)
//     }
//     chai()

// const chai = ()=>{
//     let username = "mohit"
//     console.log(this.username)
// }
// chai()

const add = (num1,num2) =>{
    return num1 +num2
}
console.log(add(2,3))

const add = (num1, num2) => num1 + num2
console.log(add(2,4))