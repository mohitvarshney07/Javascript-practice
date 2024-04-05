//syntax
// for (const iterator of object) {
    
// }
// example
// let arr = [1,2,3,4,5,6,7,8,9]
// for(const i of arr){
//     console.log(`value in arr is ${i}`)
// }

//we can use for of loop on single variable like we have a string than we can use it to print the characters of the string
//example
// let str = "hello world!"
// for(let i of str){
//     console.log(`value in str is ${i}`)
// }

//Maps
// const map = new Map()
// map.set('IN','India')
// map.set('UK','United states of america')
// map.set('Fr', 'France')
// // console.log(map)
// for(const [key,value] of map){
//     console.log(key,value)
// }

// forin loop
const myobj = {
    js : 'javascript',
    cpp : 'c++',
    rb : 'ruby',
    swift : 'swift by apple'
}
for(const key in myobj){
    // console.log(key)
    console.log(`${key} is the shortcut for ${myobj[key]}`)
}