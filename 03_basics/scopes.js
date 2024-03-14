// let a= 10
// const b= 20
// var c = 30

// console.log(a)
// console.log(b)
// console.log(c)

// scope come in view when here comes curly braces {}
//mainly curly braces {} defines the scope


// functions or variables defined with in if else curly braces comes in 
// local scope whereas variables or functions defined outheside these comes under global scope

// if(true){
//     let a= 10
//     const b= 20
//     var c = 300
// }
// console.log(a)        *it will give error
// console.log(b)        *it will also give error
// console.log(c)        //* this will not give error as var prints the updated value of the variable 
//                         no matters the value is defined inside if else or outside



// ************************nested scope****************

// function one(){
//     const username = "mohit"

//     function two(){
//         const website = "Youtube"
//         console.log(website)
//     }
//     console.log(username)


//     two()
// }
// one()


// if(true){
//     const user = "Mohit"

//     if(user == "Mohit"){
//         const website = "youtube"
//         console.log(user + website)
//         console.log(user)
//     }
// }


function addone(num){
    return num +  1
}
console.log(addone(5))

const addtwo = function(num){
    return num + 2
}
console.log(addtwo(5))