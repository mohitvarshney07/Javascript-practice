//Switch
// switch(key){
//     case value :
//         break;
//     default :
//         break;
// }

// example 1
const month = 3
switch (month) {
    case 1:
        console.log("january")
        break;
    case 2:
        console.log("feb")
        break;
    case 3:
        console.log("march")
        break;
    case 4:
        console.log("april")
        break;
    case 5:
        console.log("may")
        break;
    case 6:
        console.log("june")
        break;
    case 7:
        console.log("july")
        break;
    case 8:
        console.log("august")
        break;
    case 9:
        console.log("september")
        break;
    case 10:
        console.log("october")
        break;
    case 11:
        console.log("november")
        break;
    case 12:
        console.log("december")
        break;
    default:
        console.log("Default case matched")
        break;
}


// falsy values
// false,0,-0, BigInt 0n,"",null,undefined,NaN

//truthy values
// "0",'false,' ' ', [],{},function(){}


// to check whether a array is empty or not use 
// if(arrayname === 0){

// }

// to check whether an object  is empty or not use 
// const obj = {}
// if(Object.keys(obj name).length === 0){
//     console.log("object is empty")
// }


//Nullish coalescing operator(??) : bsically works in case when we are getting null or undefined
// example
// let val1;
// val1 = 5 ?? 10  //it will output 5 
// val1 = null ?? 10   //it will output 10
// console.log(val1)


//Ternary operator
// condition ? true value : false value
//example
const ice = 100
ice >= 100 ? console.log("greater than 100") : console.log("less than 100")