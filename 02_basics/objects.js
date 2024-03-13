//object.create ==> singleton

// object literals  in objects we give data in key value pair form

const sym = Symbol("key1")   //symbol declaration

const jsuser = {
    name : 'mohit',
    age : 22,
    [sym] : "mykey1",
    location : 'mathura',
    gmail : 'mohit@gmail.com',
    isloggedin : false,
    loggedindays : ['monday','tuesday']
}

// console.log(jsuser.gmail)
// console.log(jsuser['gmail'])
// console.log(typeof jsuser[sym])

// jsuser.gmail = 'smart@gmail.com'
// console.log(jsuser)

jsuser.greeting = function(){
    console.log("hello js user")
}
jsuser.greetingone = function(){
    console.log(`hello js user, ${this.name}`)
}

console.log(jsuser.greeting)
console.log(jsuser.greeting())
console.log(jsuser.greetingone)
console.log(jsuser.greetingone())